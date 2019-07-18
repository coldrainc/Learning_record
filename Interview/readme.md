# 面试

- 自我介绍
    您好，我叫陈雨寒，今年22岁， 是江西财经大学软件工程专业2020届毕业的一名本科生，自己比较喜欢前端的工作，并且自己有做过几个项目，自己喜欢学习有关于前端的技术，目前是在前端岗位上实习，并且参与了项目的开发。
    我做过小程序的项目和react项目
- 有什么问题问我
  你们公司现在用的技术大概是什么
  如果我能够去的话，是在你们公司的话能够做什么工作
- 为什么做前端
  自己在学校主要学的后端，平常做一些项目发现前端可以很好的展示项目，发现前端还是挺有趣的可以做出很多很好的界面，做出来的东西自己能够看得见，并不想后端那么枯燥
- 以后的职业规划
  继续专研react这块的东西，自己目前所掌握的东西肯定是远远不够的。
  希望能在公司有好的成绩，并且自己能够学到更多的东西
    能够负责项目的开发，并且将好的技术应用到其中，并且把业务做好
  提升自己工作能力, 并且学习更多有关的知识

- 对前端的一些看法
    前端 并不像后端那么枯燥，能够做出产品来，而且比较接近用户，能够学习很多的新东西
  自己以后在前端的发展
    我既然决定了在前端方面发展，就会努力往前端方面专研，有时间我也会学习后端东西，毕竟前端也会涉及后端的东西
    先积累工作经验，和学习更多知识，并且在公司能够做出一个好的成绩
    太远的也没有多想，既然选择了前端行业，希望能够在前端闯出一片天地
  - 碰到的问题
    对于一些问题
    自己在做项目的时候没有一个完整的规划，有时候在项目写到一定程度的时候可以需要修改比较打的范围
  对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？
    实现页面交互
    提升用户体验
    node 也可以实现服务器端的一些事情
    前端是最贴近用户的
  能够实习多久
  工资
  有机会转正吗
  入职时间
  月薪是税前还是税后
- js
  - 一个页面从输入 URL 到页面加载完的过程中都发生了什么事情？越详细越好
    1. 浏览器中地址栏中输入URL并回车。
      URL由三部分组成， 协议名， 域名， 端口
    2. 浏览器查找当前的URL是否存在缓存，并且比较缓存是否过期
    3. DNS解析URL的对应的IP地址
      DNS解析就是根据域名来获取IP地址
    4. 根据IP地址建立TCP连接（三次握手）
      第一次握手 客户端发送SYN（同步序列编号）包到服务器，，并进入SYN_SENT状态，等待服务器确认
      第二次握手 服务器接受SYN包，想客户端发送SYN+ACK包，进入SYN_RECV状态
      第三次握手 客户端接受到SYN+ACK包，想服务器发送确认包ACK，发送完毕TCP连接成功
    5. http发起请求
      建立连接后浏览器向服务器发送http请求
      包括，请求起始行，请求头，请求体
    6. 服务器处理请求， 浏览器接受响应
      服务器接受浏览器的http请求后，将接受到的http报文封装成http的Request对象
      并通过不用的web服务器处理， 处理完的结果以HTTP的Response对象返回
      response主要包括
      状态码
        100-199: 表示请求已经接收，继续处理
        200-299：表示请求成功
          200 请求成功，并且请求的数据已经返回
        300-399：重定向，请求转到另外的地址
        400-499：客户端错误-请求出错，语法错误或者地址不存在
        500-599：服务器错误-
      响应头
        响应头主要由Cache-Control、 Connection、Date、Pragma等组成。
      响应报文
        就是服务器响应请求返回的数据，主要由HTML，css，js，图片文件组成。
        浏览器拿到完整的html页面代码开始解析和渲染，如果遇到外部的css或者js，图片一样的步骤
    7. 渲染页面，构建DOM树
      浏览器解析渲染呈现给用户， 解析和渲染，渲染前构建DOM数和CSSDOM
      回流  当内容结构内容位置发生尺寸发生改变，需要重新计算样式和渲染树
      重绘 只是改变一些样式（背景颜色边框颜色等）只需要重新绘制样式就可以
    8. 关闭TCP连接（四次挥手）
      第一次挥手 浏览器发送完数据后，发送FIN请求断开连接
      第二次挥手  服务器发送ACK表示同意
      第三次挥手  服务器端应用程序通知TCP关闭连接， 服务器端TCP发送报文
      第四次挥手 客户端接受报文再发送报文 服务器接受报文 断开连接

  - 基本数据类型
    string
    number
    boolean
    null null===null 在判断的时候null 和undefined都是true
    undefined undefined===undefined null == undefined null和undefined在使用==的时候将会进行类型转换都为false
    symbol 具有代表性的，独一无二的值 可以作为标识符
    - 这个里有独特地方NaN不是基本数据类型， NaN（not a number） 不等于自身

  - 获取对象的所有属性（不包括原型上的属性）
    使用getOwnPropertyNames获取属性
    还有hasOwnProperty判断是否拥有该属性
  - 创建一个不能被修改的对象的属性
    Object.defineProperty 这是writeable为false可以创建一个不能被修改的属性
  - 跨域，
    qm_lession node cross_domain 细看
    跨域的产生： 为了安全问题浏览器有同源策略，当（协议，域名，端口不同时）脚本发送请求会被浏览器拦截
    两个域名之间不能跨过域名来发送请求或者请求数据，否则就是不安全的，这种不安全也就是CSRF（Cross-site request forgery），中文名称：跨站请求伪造，也被称为：one click attack/session riding，缩写为：CSRF/XSRF
    但是在开发中需要一些绕过同源策略获取数据，这就是跨域
    跨域最常用的两种方式，
    jsonp
      只能使用GET方式
      通过script标签实现跨域请求，然后通过传递过去的回调函数获取数据
      首先在客户端注册一个callback，然后把callback的名字传给服务器。此时，服务器先生成json数据，然后以javascript语法的方式，生成function，function名字就是传递上来I带参数jsonp。最后将json数据直接以入参的方式，放置function中，这样就生成js语法的文档，返回给客户端。客户端浏览器，解析script变迁，并执行返回javascript文档，此时数据作为参数，传入了客户端预先定义好的callback函数里。简单的说，就是利用script标签没有跨域限制的“漏洞”来达到与第三方通讯的目的。
      具体实现见 qm_lession/node/cross_domain
    cors (Cross-Origin-Resource-Sharing) 跨源资源分享
      还支持其他Http请求， post，delete等
      使用自定义的http头部允许浏览器和服务器相互了解对方， 从而决定请求或者响应成功与否
      给服务器设置如下
      Access-Control-Allow-Origin: 指定授权访问的域。（只能是所有地址*, 或者是某个地址....）;
      Access-Control-Allow-Methods: 授权请求的方法(POST, GET, DELETE,PUT, OPTIONS)
      当浏览器发送请求后收到允许Access-Control-Allow-Origin就会将数据返回， 否则浏览器将会拦截数据
      Access-Control-Allow-Origin: 跨域服务器允许的来源地址（跟请求的Origin进行匹配），可以是*或者某个确切的地址，不允许多个地址
      Access-Control-Allow-Methods: 允许的方法GET、HEAD、POST
      Access-Control-Allow-Headers:
        允许的Content-Type
        text/plain
        multipart/form-data
        application/x-www-form-urlencoded
      Access-Control-Max-Age: 预请求的返回结果(Access-Control-Allow-Methods和Access-Control-Allow-Headers)可以被缓存的时间，单位秒
      请求头限制
      XMLHttpRequestUpload对象均没有注册任何事件监听器
      请求中没有使用ReadableStream对象
  - xss和csrf
    - xss (跨站脚本攻击)
      当用户提交数据的使用被嵌入了恶意代码被保存在数据库中，在你正常保存到数据库中再拿出来的时候代码就会被浏览器作为代码解析，
      比如当你在保存信息的时候被嵌入一段script标签，这个标签会引入恶意的js代码，当下次取出信息的时候，就会执行代码。受到攻击
      防御
        对用户保存的信息作处理，将一些符号进行转义，例如大于号小于号等&gt;&lt;
        在用户输入时候对一些不合法的东西都过滤掉，比如script， style或者一些dom属性
        对cookie设置httponly
    - csrf (跨站请求伪造)
      当你在登录一些网站的时候，在同时又访问一些危险的网站。 这时当点击链接时候会利用在其他网站处于登录状态来提交一些请求
      例如当你登录银行的时候，不小心点击了一些危险的链接，由于你处于银行网站登录状态，这时它就可以获取你的cookie伪装成你向银行发送请求盗取你钱信息等。
      防御：
        通过refer， token或者验证码来检测用户提交
        尽量不要在页面的链接中暴露用户的隐私
        对于用户修改删除等操作最好都使用post操作
        避免全站通用的cookie， 严格设置cookie的域
  - 数组的一些方法
    arr.join() 将数据中的每一项，以某一种分隔符连接, 默认用(,)连接 返回连接后的
    arr.push(),数组添加可以同时传入多个参数，返回长度，
    arr.pop() 删除最后一项元素 返回移除的项
    shift() 删除第一项 返回删除的元素
    unshift() 将参数添加在数组开头 返回长度
    sort() 排序，可以定义排序规则传递一个函数 底层实现就是为快速排序
    reverse() 将数组倒叙
    concat() 将传递的参数添加都数组副本的后面
    slice() 返回从指定起始下标到结束下标的数字，左闭右开， 没写任意一项默认以第一项，最后一项
    splice() 可以删除，插入，修改 参数，
      arr.splice(1, 2) 从第二项开始删除两项
      arr.splice(1, 0, 3, 4) 在第一项后面就是插入， 3， 4
      arr.splice(1, 1, 3, 4) 删除arr[1], 然后插入，3， 4
    indexOf() 接受两个参数， 第一个参数 需要查找的值， 第二个参数起始位置 返回下标  没有则返回 -1
    lastIndexOf() 接受两个参数， 第一个参数需要查找的值， 第二参数起始位置但是是从后面向前查找, 返回下标 没有则返回 -1

    forEach(function(item, index){}) 遍历数组的每一项， 参数为自定义function(item,index,arr)， 没有返回的值
    map() 跟forEach差不多， 但是经过function后返回新的数组
    filter() 参数跟前两项一样， 根据自定义函数对每一项进行筛选， return false则去除
    every()  参数只需要一个函数当每一项返回的都为true 最后才返回true
    some() 只要一项满足要求就返回 ture
    reduce(function(prev, item, index, arr){}, 初始值) 从数组的第一项开始迭代 将上一次迭代的值作为函数的第一项参数， 可以给初始值， 返回迭代的结果

  - 递归和迭代的区别，
    递归就自己调用自己，
      遇到满足的条件则终止迭代，使用return来结束
    而迭代跟数组的reduce差不多
      迭代跟不同循环差不多， 只是会将每次循环后的值作为下次计算的初始值
  - 小程序和react的区别
  - 深拷贝
    由于复杂数据类型中保存是，堆中的地址并不是值，
    使用JSON.stringify(), JSON.parse()
    或者使用递归进行深拷贝
  - 内存空间，垃圾回收
    1. 为变量对象分配需要的内存
    2. 在分配到的内存中读写数据
    3. 不再使用时就会将其销毁。
    javaScript 中有自动垃圾回收机制，会销毁不再使用的变量等。 手动销毁变量将值设置为null失去作用， 下次就自动销毁
    函数局部变量在使用后一般会被垃圾回收销毁， 但是闭包会阻止这一过程
    标记清楚
      当变量进入环境时标记为 ‘进入环境’， 当变量使用完后，标记为‘离开环境’ 然后会回收所占用的内存空间
    引用计数
  - 栈， 队列， 堆
    内存就是栈和堆，
    栈就是有序
    栈 一种先进后出的一种线性表， 有操作系统分配释放，存放函数的参数值，局部变量等 都是在栈顶操作
    堆 一种key value 的无序表 一般由程序员释放， 如果程序员不释放， 程序结束是会有操作系统回收， 分配方式类似于链表
    队列是 先进先出的 在队头插入， 队尾删除
  - 继承
    1. 原型链继承
      将父类的实例作为子类的原型
      特点：
        非常纯粹的继承关系，实例是子类的实例，也是父类的实例
        父类新增原型方法/原型属性，子类都能访问到
        简单，易于实现
      缺点：
      要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
      无法实现多继承
      来自原型对象的所有属性被所有实例共享（来自原型对象的引用属性是所有实例共享的）（详细请看附录代码： 示例1）
      创建子类实例时，无法向父类构造函数传参
      function Animal(){}
      function Cat(){}
      Cat.prototype = new Animal();
    2. 构造继承
      将父类的构造函数的内容复制给子类的构造函数
      特点：
      解决了1中，子类实例共享父类引用属性的问题
      创建子类实例时，可以向父类传递参数
      可以实现多继承（call多个父类对象）
      缺点：
      实例并不是父类的实例，只是子类的实例
      只能继承父类的实例属性和方法，不能继承原型属性/方法
      无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
      function Animal(){}
      function Cat(name){
        Animal.call(this);
        this.name = name;
      }
    3. 组合继承
      function Super(name){
        this.name = name;
        this.friends = ['gay1', 'gay2']
      }
      Super.prototype.say = function(){
        console.log(this.name);
      }
      function Sub(name, age){
        Super.call(this, name);
        this.age = age;
      }
      Sub.prototype = new Super();
      Sub.prototype.sayAge = function () {
        console.log(this.age);
      }
      原型继承和构造继承的组合
      先将父类的实例作为子类的原型， 子类再使用call复制父类的属性
      优点： 父类的方法可以被复用， 父类的引用属性不会被共享，子类构建实例是可以父类传递参数
      缺点： 调用了两次父类的构造函数，第一次给子类的原型添加了父类的name, arr属性，第二次又给子类的构造函数添加了父类的name, arr属性，从而覆盖了子类原型中的同名参数。这种被覆盖的情况造成了性能上的浪费。
    4. 寄生组合继承
      避免组合继承的缺点
      实现：
      inheritPrototype(Sub, Super) {
        var prototype = Object.create(Super.prototype);创建一个父类的副本
        prototype.constructor = Sub;为副本添加 constructor属性， 弥补重写原型失去的constructor属性
        Sub.prototype = prototype
      }
      function Super(name) {
        this.name = name;
      }
      Super.prototype.sayName = function(){
        console.log(this.name)
      }
      function Sub(name, age){
        this.age = age;
        Super.call(this, name)
      }
      inheritPrototype(Sub, Super)
      Sub.prototype.sayAge = function() {
        console.log(this.age);
      }
    5. 实例继承
      function Animal(){};
      function Cat(name) {
        const instance = new Animal();
        instance.name = name;
        return instance;
      }
    6. 拷贝继承
      function Cat(name) {
        const animal = new Animal();
        for (let p in animal) {
          Cat.prototype[p] = animal[p];
        }
        Cat.prototype.name = name;
      }
    7. es6 class extends 语法糖 本质与寄生组合相似
      class Animal(){
      }
      class Cat extends Animal() {
        construct (name) {
          this.name = name;
        }
      }
  - 异步
    - promise
      解决异步问题，通过同步的方式来写异步代码，
      解决地狱回调的问题
      串行
      A.then(B).then.(C)
    - async await 更像同步代码
      async函数返回的就是一个promise对象
      await等待的是一个返回值
      如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
      如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。
      串行
      await A
      await B
      await只能在 async函数中使用

  - 实现对象的遍历 使用obj.hasOwnProperty(key) 来判断是否是对象的属性
    Object.keys() 获取对象所有属性的key 是一个数组
    使用for in 遍历key for of 遍历每一项
    Object.getOwnPropertyNames(obj) 对象的方法获取对象所有的属性，不包括prototype的属性
  - js查找元素
    出了getElementById要加 s
    document.getElementById()
    document.getElementsByClass();
    document.getElementsByTagName();
    document.getElementsByName()
  - queryselector 参数为选择器
    querySelector() 当有多个时， 返回第一个匹配的
    querySelectorAll() 以node list节点列表的形式返回所有的
    接受选择符，
  - js怎么实现进制转换
    利用栈的特性，和递归
    parseInt(10, 2) 将10转为2进制
  - parseInt 类型转换， 怎么将字符串转换为number
    parseInt， parseFloat， number *（乘法）- / 都可以将字符转为数组
  - 闭包 和 应用场景
    由于函数的作用域问题需要用到，闭包
    闭包指的是能够访问自由变量的函数
    自由变量是可以在函数中使用，但是既不是函数的变量也不是参数。
    缺点： 占用内存，使用不当可能造成内存泄漏
    有点：可以保存变量的值不被清除
  - 作用域
    变量作用域两种：全局变量、局部变量。js中函数内部可以读取全局变量，函数外部不能读取函数内部的局部变量 这是就应该到闭包来获取函数内部的值

  - 使得对象的属性无法改变
  - null等于null吗 undefined等于undefined吗
  - symbol 的作用
    有象征性的独一无二的 作为标签
  - 返回对象的可枚举属性和方法的名称数组。
    Object.getOwnPropertyNames
  - 怎么看待微信小程序
  - typescript和原生js
  - == 和 ===
  - es6
    const  let
    模板字面量`${}`
    解构[x, y, z] = [1, 2, 3]
    展开运算符[...arr]
    可变参数 展开运算符作为函数参数用，就相当于把所有的参数都打包起来
    对象字面量简写
    for of 不能迭代对象
    箭头函数
    类class 语法糖
    super extends 语法糖
  - 事件轮询 宏任务， 微任务
    - 宏任务
      script，setTimeout，setInterval，setImmediate， I/O, UI rendering;
    - 微任务
      Promise，process.nextTick, Object.observe, MutationObserve;
  - 箭头函数
  - this
  - 异步
  - call 和 apply有什么区别
    apply 第一个参数是以一个对象， 第二个参数是数组
    call 第一个是对象， 后面则是一串参数
  - 原型链
    对象和原型都有原型，对象的原型就是原型对象，
    原型链对象的原型也是一个对象，原型也有原型
    prototype(原型对象)函数才有的属性, 函数也有__proto__属性
    对象的__proto__属性指向该对象构造函数的原型对象 也就是 obj.__protype = Obj.prototype
    __proto__对象具有的属性，js万物皆对象，所以会形成一条原型链到Object而Object.prototype.__proto__=null
    __proto__可以理解为构造器的原型
    __proto__指向prototype
    <https://www.cnblogs.com/wyaocn/p/5815761.html/>
    <https://www.cnblogs.com/shuiyi/p/5305435.html/>
  - 事件机制
    捕获阶段 处于目标阶段 冒泡阶段
    事件代理使用就是利用冒泡，事件发出者 e.target 父级元素 e.currentTarget 事件处于这里的时候会监听
    target处于事件的目标阶段
  - 模板引擎
  - SEO
    搜索引擎优化
  - 变量提升
    函数作为一等公民先被提升，并且不会被变量提升覆盖，但是在赋值的时候会被覆盖
  - 如何判断数据类型 typeof 和 instanceof
  - 并发
    JavaScript 用不阻塞， 处理IO通常由事件和回调函数来进行实现
  - 判断是否是对象
    Object.prototype.toString.call(bar) === "[object, Object]"
- html
  重绘
  回流
  - 对语义化的理解
    - 易于阅读代码
    - header footer H1-H6 strong nav aside section
    - 有利于团队的开发和维护，方便其他设备解析
    - 有利于爬虫的爬取
    - 有利于SEO
    - 没有css的情况下也可以较好的呈现内容
    - 用户体验
- 浏览器
  - TCP UDP
    TCP注重数据安全性，UDP注重数据传输快
    传输层提供端到端的可靠报文传递和错误恢复
    TCP是点到点的，面向连接的，可靠地协议;
    UDP是无连接的，不可靠的，面向报文的协议
    TCP数据包是有序的， 不会出现数据丢失， 数据在到达的时候会根据序号进行排序。 丢失数据包，会进行重传
    UDP数据丢失不会进行重传， 而且是
    TCP速度比较慢， 由于需要进行握手
    UDP速度比较快， 因为因为不需要， 数据相当于只管发过去， 并不管是否完整，是否到达
  - 同源策略
    协议，域名，端口不同浏览器会阻止数据的返回
  - 跨域
  - http
    - https传输过程加密
    http1.1长连接不串行如果有某个连接请求超时，后序的请求会别阻塞
    http2多路复用多个请求并行，请求优先级， 服务器推送，二进制分帧（就是二进制数据），首部压缩，浏览控制
    对称加密 使用相同的的秘钥加密解密
    非对称加密 有一个公钥， 使用公钥加密，使用秘钥解密
    一般意义上的https，就是服务器有一个CA证书。主要目的是保证服务器就是他声称的服务器，这个跟第一点一样；服务端和客户端之间的所有通讯，都是加密的。
    客户端通过验证，证书的合法
    https协议需要到ca申请证书，一般免费证书很少，需要交费
    http的连接很简单，是无状态的；所以需要cookie
    HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全
    http 80 端口
    https 443 端口
    <https://www.cnblogs.com/ranyonsue/p/5984001.html/>
    - http 头信息
      请求头
        cache-control，connection，cookies，Accept-，User-Agent，host
      响应头
        cache-control， connection， set-cookies， content-type， content-，last-modified，max-age
        ，server
    - cookies localStore 和 sessionStore， session
      用户登录成功后，会在服务器存一个session，同时发送给客户端一个cookie 包含session_id
      cookies: 由服务器生成 在发送响应的时候跟随在响应头部传给客户端 默认是关闭浏览器后失效， 可以设置失效时间
        用来保存用户信息，用来给服务器辨别身份，只能保存4kb的数据
        保存在客户端
        编码方式 encodeURIComponent
      localStore:
        用来本地保存数据， 可以永久保存数据， 可以保存5M的数据。
      sessionStore:
        跟localStore差不多也是用来保存数据的，但是只是将数据在一次会话中保存。session结束后将会清除sessionStore中的数据。
      session:
        服务端用于记录用户状态的用户标记具体用户的的机制，在服务端保存的用来跟踪用户状态的数据结构。在浏览器关闭后这次session就消失， 数据保存在服务器中的文件或者数据库中
      token:
        Token是在客户端频繁向服务端请求数据，服务端频繁的去数据库查询用户名和密码并进行对比，判断用户名和密码正确与否，并作出相应提示，在这样的背景下，Token便应运而生。
        Token的目的是为了减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮。
- 七层协议四层协议
  - 应用层 http ftpt6 最高层 负责协调各应用程序的工作。直接向用户提供服务。
  - 展示层：对来自应用层数据进行解释，处理用户信息的表示问题，编码，数据格式转换问题等
  - 会话层：为两个实体展示层提供建立和使用连接的方法。
  - 传输层 TCP UDP 向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输
  - 网络层：通过路由选择算法，为报文或分组通过通信子网选择最优的路径 ip协议
  - 数据链路层: 负责建立和管理节点之间的链路
  - 物理层: 物理层的作用是实现相邻计算机之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异

- git
  git add 把要提交的所有修改放到暂存区
  git commit 一次性把暂存区的所有修改提交到分支
  git push 提交到远程仓库

  代码压缩
      1.使用CommonsChunksPlugin 提取多个chunk之间的通用模块，减少总体代码体积
      2.把部分依赖转移到CDN上，避免每次编译过程都由Webpack处理
      3.对一些组件库采用按需加载，避免无用的代码
      从而能做到诸如去掉无效代码、去掉日志输出代码、缩短变量名等优化
  - mysql 和MongoDB的区别
  - mysql 数据表
    更侧重数据安全和关系。事务安全
  - MongoDB 集合
    更侧重写入负载，
    表结构不明确，且数据在不断变大
    非关系型数据库(nosql ),属于文档型数据库。先解释一下文档的数据库，即可以存放xml、json、bson类型系那个的数据。这些数据具备自述性（self-describing），呈现分层的树状数据结构。数据结构由键值(key=>value)对组成。
  - typescript 和 js对比
    静态类型检测
  - 深度优先
    <https://www.cnblogs.com/wuguanglin/p/DPSandBPS.html/>
  - 服务器响应请求返回的数据
  - 缓存 服务器端头信息中 cache-contro
    强缓存，200 当在检查浏览器中有缓存数据，直接使用缓存数据。
    协商缓存 304 先向服务器发送请求校验是否要请求新的数据，然后根据浏览器返回的头信息来决定是否需要获取数据
  - DNS
    域名系统最为域名和IP的地址的分布式数据库
    在通过域名来解析IP的时候，通过迭代的方式来获取IP 顶级域名 根域名
  - 如何在传递props的时候不影响组件外
    constructor中 深拷贝一份数据，然后赋值给state
  - 类型转换 [] 和 {}
  由于空数组和空对象都是Object类型，因此用if（）判断的时候，都为true
  在使用==会进行类型转换
  首先判断两者类型是否相同，如果相等，判断值是否相等.
  如果类型不同，进行类型转换
  判断比较的是否是 null 或者是 undefined, 如果是, 返回 true .
  判断两者类型是否为 string 和 number, 如果是, 将字符串转换成 number
  判断其中一方是否为 boolean, 如果是, 将 boolean 转为 number 再进行判断
  判断其中一方是否为 object 且另一方为 string、number 或者 symbol , 如果是, 将 object 转为原始类型再进行判断

  [] == false 为true 因为 [] 最后转化为0 false 也为0
  [0] == false 位true 最后[0] 为0 false 也为0
  console.log(Number([])); // 0
  console.log(Number({})); //NaN
  （1）console.log([]==false);  //true，因为[]转化为0，false转化为0，因此为true
  （2）console.log({}==fasle); //false，因为{}转化为NaN，因此为false`
  - Set() Map()
    Set 类似于数组，但是值是唯一的
      两个NaN是相等。两个对象总是不相等的
    Map 与 Object 差不多但是Map 的key可以是任何值 Key也是唯一的 后面的会覆盖前面
  - 状态码
    200 OK客户端请求成功
    301 永久重定向
    302 临时重定向
    304 上次缓存的文件未被修改，
    400 Bad Request 客户端请求语法错误
    401 请求未经授权
    403 服务器受到接受请求，但是拒绝提供服务
    404 请求资源不存在
    500 服务器发生不可预期的错误
    503 服务器不能处理请求，一段时间恢复
  - 二叉树遍历，前序，中序，后序， 知道其中两个，转另外一个
  - 由Iterator来实现的一些API，一些需要遍历的东西大部分实现都是由Iterator实现的
    具有 next() 方法
    伪数组和数组，字符串的遍历都是由Iterator来是实现的
    解构
    数组 的一些遍历方法
    生成器中的 yield
    扩展运算符
    for of
    Set Map
  - meta
    Meta 元素中的信息可以描述 HTML 文档。
    Meta 元素中的信息可以描述文档的关键词。
  - 链表查找中间节点 采用重两边开始然后一直往中间移动
  - websocket
    在网络中的两个应用进行通信，提供段端对端的通信，通过在两端建立socket，双方建立起段对端的TCP连接，连接建立后就没有客户端和服务端之分了，双向通信
    实时数据交互应用开发。
    一种在单个 TCP 连接上进行全双工通讯的协议。
  - react 与 vue的对比
    react和vue相同点
      使用虚拟DOM， 有自己的diff算法
      提供响应式和组件化视图组件
      将注意力保持在核心库，而将其他功能如路由状态管理交给相关的库
    react和vue区别
      react中一切都是js，将html可以用js表达 jsx
      vue则是在经典的web技术上扩展 模板语法
  
  缓存策略，
    ./js/缓存策略
  - 单向数据绑定和双向数据绑定的优缺点
    - 单向数据指用户访问view， view通过交互dispatch一个action然后通过reducer更新state， state更新后出发view的更新
    这样数据总是清晰的，单向流动的数据， 便于维护并且出现问题可以预测
    所有状态是可追踪的， 数据的入口都只有一个，数据流更加清晰，更加直观
    - 双向数据流数据和视图之间的双向绑定，

  babel编译原理，
    babel实际上就是相当于编译器，将高版本的js编译成低版本的js
    首先 babylon对代码进行解析， 得到AST plugin用babel-traverse对数进行遍历转义得到新的AST树 用babel-generator通过AST树生成ES5的代码
  loader
    预处理，使用loader来告诉webpack如何转换某一类型的文件， 并且引入到打包出的文件中。
  plugins
    可以打包优化， 资源管理等
  redux,
    通过dispatch 一个action 然后通过reducer 改做出对应的状态树的修改，当数据发生改变后，数据将会更新到view上
  react声明周期，
  高度是宽度的一半
    当使用百分比值时，通过包含块的宽度计算。由此可以通过设置 padding-top: 50%; 来实现高度恒为宽度的 50% 效果。
    使用的margin padding 的 % 是父元素的宽度
  flex子元素含有的属性
    flex-grow 表示父元素有空间剩余的时候， 分配给子元素的比列， 默认为0 表示不分配
    flex-shrink 表示当子元素宽度总和大于父元素宽度的时候， 个子元素压缩大小， 默认为1，  表示个子元素等比压缩
    flex-basis 设置子元素的空间， 默认为auto， 表示原本的大小，当父元素有剩余空间的时候，可以用来扩展子元素的看空间，当子元素超过父元素的大小总和的时候，按子元素的比列来分配大小
    flex 是 这三个属性的集合
    order 定义子元素排序
    align-self 允许子元素单独设置对其方式
  div宽高问题
    浏览器根本就不计算内容的高度，除非内容超出了视窗范围(导致滚动条出现)。或者你给整个页面设置一个绝对高度。否则，浏览器就会简单的让内容往下堆砌，页面的高度根本就无需考虑。
  delete 删除对象的一个属性
  小程序
    小程序生命周期onLaunch， onShow， onHide，onReady， onUnload ，onPullDownRefresh
    小程序组件 text input select button label picker radio
  egg
    作为企业级开发框架提供web开发的核心功能，和插件机制具有很高的可扩展性，通过框架聚合插件，并根据项目需求定制配置，降低开发成本， 约定式开发框架，减少学习成本。但是也可以不按照约定的来，可以自己定义配置来覆盖默认配置。
    提供基于egg定制上层框架的能力
    高度可扩展的插件机制
    内置多进程管理
    基于koa开发，测试覆盖率高
    渐进式开发
  react
    用于构建用户界面的js框架，只负责解决view层的渲染。
    通过数据来渲染界面
  typescript
    面试前复习这里的知识<https://jkchao.github.io/typescript-book-chinese//>
    平常有时间也要去巩固
  自己做过的东西
    小程序
      组件，就是平常的 view视图容器 input picker从底部弹起的滚动选择器 select radio text checkbox
      小程序是通过后台获取后台的数据所以不需要解决跨域的问题,直接通过request请求就行，一般跨域问题的话通过在后台设置Access-Contral-Allow-Origin: * 获取某一个域名
      生命周期 onload onshow onready onhide onlaunch onpulldownrefresh stoppulldownfresh
    react项目
      主要将路由的问题
    公司的小程序
    公司的项目
    自己做过的项目，必须完全了解各方面
    确保在你所做的项目中，能够清楚的说出每个细节，如果你用到了某些技术比如v-router 那你至少要说得出针对于他的几种配置以及你在项目中是如何使用的
