# css

- css 盒子模型
  标准盒子模型： 宽度=内容宽度content + border + padding + margin
  怪异盒子模型： 宽度= 内容宽度（content+border+padding） + margin
- box-sizing
  用来控制元素的盒子模型的解析模式，
  默认为content-box 也就宽度等于width + border + padding+ margin
  border-box = width（content+ border + padding） + margin
- 属性选择器
  css选择符： id选择器(#id)， 类选择器(.class)， 标签选择器(div)， 相邻选择器(h1+p)， 子选择器(ul>li)， 后代选择器(li a)， 通配符选择器(*)， 属性选择器a[rol="external"]， 伪类选择器(a:hover, li:nth:child)
  可继承属性： font-size, font-family, color
  不可继承属性： border padding， margin， width， heiht
  优先级： ！import>[id> class> tag]
  !important 比内联优先级高也就 直接在html里面写样式
  1. 样式与html分离， 有助于后期更改样式。
  2. 对浏览器来说， 样式文件由于是单独的文件， 可以在本地建立缓存， 下次就不需要在加载样式文件， 有利于加快网页的访问速度
  3. 对于服务器来说， 如果样式文件浏览器减少加载， 那么服务器就可以减少下载流量可以节约服务器的宽带
  而且样式直接写在html中不便于管理， 不便于复用
- css优先级算法
  元素选择符： 1
  class 选择符 10
  id 选择符 100
  内联样式： 1000
  ！important声明的样式优先级最高， 如果冲突在进行计算
  如果优先级相同，将会后面的覆盖前面
  继承得到的样式优先级最低
- css新增的伪类
  p:first-of-type 选择属于其父类的首个元素
  p:last-of-type 选择属于其父属性的最后一个元素
  p:only-of-type 选择数据器父元素的唯一的元素
  p:only-child 选择属于其父元素的唯一子元素
  p:nth-child(n)选择属于父元素的第n个子元素
- 如何居中div热河中一个浮动的远古三
  div：
  border：1px solid red;
  marin: 0 auto;
  浮动元素的上下左右居中：
  1. border：1px solid red;
      float: left;
      position: absolute;
      width: 200px;
      height: 200px;
      left: 50%;
      top: 50%;
      margin: -100px;
    父元素设置display为flex
    justify-content: center;
    align-items: center;
  2. 绝对定位的左右居中：
    border: 1px solid black;
    position: absolute;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    left: 0;
    right: 0;
- dispaly
  inline - 内联
  none - 隐藏
  block 块显示
  table 表格显示
  list-item - 项目列表
  inline-block 行内块元素
- position
  static(默认)：按照正常文档进行排版
  relative(相对定位): 不脱离文档流， 相对自身进行定位
  absolute(绝对定位): 参考最近的一个定位
  fixed(固定定位): 相对浏览器的窗口进行定位
  sticky 粘性布局 兼容性太差了 relative和absolute的结合 在设置的值内是relative 超过设置的值将会使用fixed定位
- css3新特性
  RGBA和透明度
  backgound-image backgound-origin(content-box/paddingbox/border-box)
  word-wrap 对长的不可分割的单词换行 word-wrap: break-word
  文字阴影 text-shadow:
  font-face： 定义自己的字体， 使用字体图标
  圆角： border-redius 属性用于创建圆角
  边框图片： border-image:url
  盒子阴影box-shadow
  媒体查询： d定义多套css当浏览器的尺寸变化是会采用不同的属性
- css3 flexbox
  display: flex;
  该布局模型的目的是提供一种更加高效的方式来对容器的条目进行布局，对其和分配空间， 在传统的布局中 block布局是把块在垂直方向从上到下依次排列，inline布局则是在水平方向来排列。 弹性布局并没有这些限制，可以根据要求来自由更改
- 使用css创建三角形
  利用一个正方形的width height 为0
  让后设置border的大小只显示一边的border的大小这样就出现了三角形
  具体实现：
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  bordre-right: 40 solid transparent;
  border-bottom: 40px solid #ff0000;
- 一个满屏品字布局
  1. 三块高度是确定的；
  上面那块用margin: 0 auto;居中
  下面两块使用float或者inline-block不换行；
  用margin调整位置使他们居中
  2. 第二种全屏的品子布局
  上面的div设置成100% 下面的div分别宽为50%，然后使用float或者inline-block
- 常见的兼容性问题
  不同的浏览器的标签默认的margin和padding不一样
  * {margin: 0; padding: 0;}
- 初始化css样式
  浏览器的兼容性问题， 不同的浏览器对有些标签的默认值是不同的，如果没对css初始化往往会出现浏览器之间的页面显示差异。
- absolut的containing block 计算方式跟正常流
  无论数据那种，都要先找到其祖先元素中最近的position值不为static值然后在判断
  如果此元素为inline元素，则containing block为能够包含这些元素生成第一个和最后一个inlinebox的padding box 除margin boder外的区域的最小矩形
  否则 则由这个祖先元素的padding box 构成
  如果都找不到 则为initial containing block
- css
  BFC
    块级格式化上下文
    浮动元素和绝对定位元素，非块级盒子的块级容器（例如inline-block）以及overflow不为visible的块级盒子都会创建BFC
    float不为none
    position不是static和relative
    display的值是inline-block，table-cell，flex，table-caption，inline-flex
    overflow不为visible
    BFC是一个独立的布局环境，其中元素布局不受外界影响，块盒和行盒都会样子父元素的边框排列
    当连个元素在不同的BFC中时 利用BFC避免外边距折叠
  - 选择器
    *
    #id 100
    .class 10
    element 1
    element1, element2 选择多个
    element1 element2  后代选择器
    element1>element2 子元素选择器
    element1+element2 兄弟选择器 选择相邻的兄弟元素
    [attribute] [target]选择所有带有该属性的元素
    [attribute=value] [target=_blank] 选择所有属性target为_blank的元素
    [attribute~=value] 选择所有包含value的元素
    。。。。。。。。
  盒子模型， 怪异盒子模型（兼容性问题）
  - 伪类和伪元素
    伪类 :focus :hover :link :visited
    伪元素 :before :after
  实现居中
  display
  overflow
  position
  inline， block， inline-block
  上下margin问题
  inline 是否有margin， padding
  响应式
  有哪些块级元素， 行内元素
  为什么分离css
  float
  相对单位
    rem 相对HTML根元素font-size 的大小
    em相对当前对象的文本font-size如果没有则相对浏览器默认字体大小
    VH当前屏幕高度
  meta是head区的一个辅助性标签。其主要作用有：搜索引擎优化（SEO），定义页面使用语言，自动刷新并指向新的页面，实现网页转换时的动态效果，控制页面缓冲，网页定级评价，控制网页显示的窗口等！
- 布局
  flex
    一维布局只要在父级元素中设置display为flex就可以实现弹性布局 布局简单
  grid
    二维布局 fr 自适应单位 为剩余空间分配位置 有点像flex: 1;这种
- HTML 新特性
  - 语义化标签
  <header>
  <footer>
  - 增强型表单
  - 视屏，音频
  - canvas
  - svg
  - 拖放API
- css3
  transform
  animation
  transition
  