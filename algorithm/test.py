# -*- coding: utf-8 -*-
"""
Created on Thu Jan  3 16:39:42 2019

@author: tx
"""
import pandas as pd #数据分析
import numpy as np #科学计算

from sklearn.feature_extraction import DictVectorizer
import re
import sklearn

import xgboost as xgb
from xgboost.sklearn import XGBClassifier
import seaborn as sns


import plotly.offline as py
py.init_notebook_mode(connected=True)
import plotly.graph_objs as go
import plotly.tools as tls

import warnings
warnings.filterwarnings('ignore')

data_train = pd.read_csv(r'Titanic-dataset\train.csv') #根据数据位置自行修改
data_test = pd.read_csv(r'Titanic-dataset/test.csv')

data_train.info()

print(data_train.describe())


import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei'] # 用来正常显示中文标签
plt.rcParams['font.family']='sans-serif' 
plt.rcParams['axes.unicode_minus'] = False # 用来正常显示负号
fig = plt.figure()
fig.set(alpha=0.2) # 设定图表颜色alpha参数

plt.subplot2grid((2,3),(0,0)) # 在一张大图里分列几个小图
data_train.Survived.value_counts().plot(kind='bar')# 柱状图
plt.title(u"获救情况 (1为获救)") # 标题
plt.ylabel(u"人数") # Y轴标签

plt.subplot2grid((2,3),(0,1))
data_train.Pclass.value_counts().plot(kind="bar") # 柱状图显示
plt.ylabel(u"人数")
plt.title(u"乘客等级分布")

plt.subplot2grid((2,3),(0,2))
plt.scatter(data_train.Survived, data_train.Age) #为散点图传入数据
plt.ylabel(u"年龄") # 设定纵坐标名称
plt.grid(b=True, which='major', axis='y')
plt.title(u"按年龄看获救分布 (1为获救)")

plt.subplot2grid((2,3),(1,0), colspan=2)
data_train.Age[data_train.Pclass == 1].plot(kind='kde') # 密度图
data_train.Age[data_train.Pclass == 2].plot(kind='kde')
data_train.Age[data_train.Pclass == 3].plot(kind='kde')
plt.xlabel(u"年龄")# plots an axis lable
plt.ylabel(u"密度")
plt.title(u"各等级的乘客年龄分布")
plt.legend((u'头等舱', u'2等舱',u'3等舱'),loc='best') # sets our legend for our graph.

plt.subplot2grid((2,3),(1,2))
data_train.Embarked.value_counts().plot(kind='bar')
plt.title(u"各登船口岸上船人数")
plt.ylabel(u"人数")
plt.show()



Survived_0 = data_train.Pclass[data_train.Survived == 0].value_counts() # 未获救
Survived_1 = data_train.Pclass[data_train.Survived == 1].value_counts() # 获救
df = pd.DataFrame({u'获救':Survived_1,u'未获救':Survived_0})
df.plot(kind = 'bar', stacked = True)
plt.title(u'各乘客等级的获救情况')
plt.xlabel(u'乘客等级')
plt.ylabel(u'人数')
plt.show()




Survived_m = data_train.Survived[data_train.Sex == 'male'].value_counts()
Survived_f = data_train.Survived[data_train.Sex == 'female'].value_counts()
df = pd.DataFrame({u'男性':Survived_m,u'女性':Survived_f})
df.plot(kind = 'bar', stacked = True)
plt.title(u'按性别看获救情况')
plt.xlabel(u'性别')
plt.ylabel(u'人数')
plt.show()



fig = plt.figure()
plt.title(u'根据舱等级和性别的获救情况')

ax1 = fig.add_subplot(141) # 将图像分为1行4列，从左到右从上到下的第1块
data_train.Survived[data_train.Sex == 'female'][data_train.Pclass != 3].value_counts().plot(kind = 'bar', label = 'female high class', color = '#FA2479')
ax1.set_xticklabels([u'获救',u'未获救'], rotation = 0) # 根据实际填写标签
ax1.legend([u'女性/高级舱'], loc = 'best')

ax2 = fig.add_subplot(142, sharey = ax1) # 将图像分为1行4列，从左到右从上到下的第2块
data_train.Survived[data_train.Sex == 'female'][data_train.Pclass == 3].value_counts().plot(kind = 'bar', label = 'female low class', color = 'pink')
ax2.set_xticklabels([u"未获救", u"获救"], rotation=0)
plt.legend([u"女性/低级舱"], loc='best')

ax3 = fig.add_subplot(143, sharey = ax1)
data_train.Survived[data_train.Sex == 'male'][data_train.Pclass != 3].value_counts().plot(kind = 'bar', label = 'male high class', color = 'lightblue')
ax3.set_xticklabels([u'未获救',u'获救'], rotation = 0)
plt.legend([u'男性/高级舱'], loc = 'best')

ax4 = fig.add_subplot(144, sharey = ax1)
data_train.Survived[data_train.Sex == 'male'][data_train.Pclass == 3].value_counts().plot(kind = 'bar', label = 'male low class', color = 'steelblue')
ax4.set_xticklabels([u'未获救',u'获救'], rotation = 0)
plt.legend([u'男性/低级舱'], loc = 'bast')
plt.show()



fig = plt.figure()
fig.set(alpha = 0.2)
Survived_0 = data_train.Embarked[data_train.Survived == 0].value_counts()
Survived_1 = data_train.Embarked[data_train.Survived == 1].value_counts()
df = pd.DataFrame({u'获救':Survived_1,u'未获救':Survived_0})
df.plot(kind = 'bar', stacked = True)
plt.title(u'各登陆港口乘客的获救情况')
plt.xlabel(u'登陆港口')
plt.ylabel(u'人数')
plt.show()


g = data_train.groupby(['SibSp','Survived']) # 数据分组
df = pd.DataFrame(g.count()['PassengerId'])
print (df)
g = data_train.groupby(['Parch','Survived'])
df = pd.DataFrame(g.count()['PassengerId'])
print (df)


fig = plt.figure()
fig.set(alpha = 0.2)

Survived_cabin = data_train.Survived[pd.notnull(data_train.Cabin)].value_counts()
Survived_nocabin = data_train.Survived[pd.isnull(data_train.Cabin)].value_counts()
df = pd.DataFrame({u'有':Survived_cabin, u'无':Survived_nocabin}).transpose()
df.plot(kind = 'bar', stacked = True)
plt.title(u'按Cabin有无看获救情况')
plt.xlabel(u'Cabin有无')
plt.ylabel(u'人数')
plt.show()


# 选择用于训练的特征
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']
x_train = data_train[features]
x_test = data_test[features]

y_train=data_train['Survived']

'''
x_train=pd.DataFrame(x_train)
x_test=pd.DataFrame(x_test)
y_train=pd.DataFrame(y_train)
'''

print(x_train)
x_train=np.array(x_train)
x_test=x_test.as_matrix()
y_train=y_train.as_matrix()



'''
# 检查缺失值
x_train.info()
print("-"*100)
x_test.info()

# 使用平均年龄来填充年龄中的nan值
x_train['Age'].fillna(x_train['Age'].mean(), inplace=True)
x_test['Age'].fillna(x_test['Age'].mean(),inplace=True)

# 使用票价的均值填充票价中的nan值
x_test['Fare'].fillna(x_test['Fare'].mean(),inplace=True)

# 使用登录最多的港口来填充登录港口的nan值
print(x_train['Embarked'].value_counts())
x_train['Embarked'].fillna('S', inplace=True)
x_test['Embarked'].fillna('S',inplace=True)


# 将特征值转换成特征向量
dvec=DictVectorizer(sparse=False)

x_train=dvec.fit_transform(x_train.to_dict(orient='record'))
x_test=dvec.transform(x_test.to_dict(orient='record'))

# 打印特征向量格式
print(dvec.feature_names_)

print(x_train[0])
'''

'''
from sklearn.model_selection import KFold

def get_stacking(clf, x_train, y_train, x_test, n_folds=10):
    train_num, test_num = x_train.shape[0], x_test.shape[0]#列
    second_level_train_set = np.zeros((train_num,))
    second_level_test_set = np.zeros((test_num,))
    test_nfolds_sets = np.zeros((test_num, n_folds))
    kf = KFold(n_splits=n_folds)
    for i,(train_index, test_index) in enumerate(kf.split(x_train)):
        x_tra, y_tra = x_train[train_index], y_train[train_index]
        x_tst, y_tst = x_train[test_index], y_train[test_index]
        
        clf.fit(x_tra, y_tra)
        
        second_level_train_set[test_index] = clf.predict(x_tst)
        test_nfolds_sets[:,i] = clf.predict(x_test)
    second_level_test_set[:] = test_nfolds_sets.mean(axis=1)
    return second_level_train_set, second_level_test_set




from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import ExtraTreesClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier



from sklearn.cross_validation import train_test_split

X_train, X_test, y_train,y_test = train_test_split(x_train,y_train,test_size=0.3, random_state=42) # 以7：3（0.3）将训练集与获救结果随机拆分，随机种子为42


rf = RandomForestClassifier(n_estimators=500, warm_start=True, max_features='sqrt',max_depth=6, 
                            min_samples_split=3, min_samples_leaf=2, n_jobs=-1, verbose=0)

ada = AdaBoostClassifier(n_estimators=500, learning_rate=0.1)

et = ExtraTreesClassifier(n_estimators=500, n_jobs=-1, max_depth=8, min_samples_leaf=2, verbose=0)

gb = GradientBoostingClassifier(n_estimators=500, learning_rate=0.008, min_samples_split=3, min_samples_leaf=2, max_depth=5, verbose=0)

knn = KNeighborsClassifier(n_neighbors = 2)



train_sets = []

test_sets = []

for clf in [rf, ada, gb, et, knn]:
    train_set, test_set = get_stacking(clf, X_train, y_train, X_test)
    train_sets.append(train_set)
    test_sets.append(test_set)

meta_train = np.concatenate([result_set.reshape(-1,1) for result_set in train_sets], axis=1)
meta_test = np.concatenate([y_test_set.reshape(-1,1) for y_test_set in test_sets], axis=1)

dt = DecisionTreeClassifier(max_depth=8)

dt.fit(meta_train, y_train)

df_predict = dt.predict(meta_test)

 

print(df_predict)

'''


