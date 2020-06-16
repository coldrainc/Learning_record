# 面试

- 高阶组件
    其实对于一般的中小项目来说，你只需要用到以上的这三种组件方式就可以很好地构造出所需的应用了。但是当面对复杂的需求的时候，我们往往可以利用高阶组件(Higher-Order Component)编写出可重用性更强的组件。那么什么是高阶组件呢？其实它和高阶函数的概念类似，就是一个会返回组件的组件。或者更确切地说，它其实是一个会返回组件的函数。就像这样
- webpack
- babel
  babel是将es6代码转译为es5， 将代码解析成AST（抽象语法树），旧的AST转换成新的AST就是es5的语法树，然后以AST为基础生成新的代码
- position static absolute relative fixed sticky
- 实现三角形 设置宽高为0然后这是边框大小把其他三边设置为透明， 这样就是三角形
- udp/tcp区别，
  tcp 面向连接 有三次握手，数据传输更加安全当数据包丢失会进行一个回传，并且会对数据进行排序，udp不会
  tcp对系统资源要求较多，udp较少
  UDP传送数据的速度仅仅是受应用程序生成数据的速度、 计算机的能力和传输带宽的限制； 在接收端，UDP把每个消息段放在队列中，应用程序每次从队列中读一个消息段。
- instanceof和typeof区别
  typeof 判断数据类型，但是只能判断出5种初始类型null会判断为object，然后就object和function
  instanceof 比较 两个对象的类型
  可以通过Object.prototype.toString.call()判断类型返回的是具体类型[object Object] [object String]这种类型
- setTimeout，setInterval定时问题 注意这里是使用setInterval可能会出现延迟问题，当里面执行的代码时间超过设置的时间就可能会出现延迟问题
  使用setTimeout，而不使用setInterval，经常使用setTimeout来模拟setInterval
  上面代码每隔2000毫秒，就跳出一个alert对话框。如果用户一直不点击“确定”，整个浏览器就处于“堵塞”状态，后面的执行就一直无法触发，将会累积起来。举例来   说，第一次跳出alert对话框后，用户过了6000毫秒才点击“确定”，那么第二次、第三次、第四次执行将累积起来，它们之间不会再有等待间隔。
  使用requestAnimationFrame来解决setInterval的问题
- 节流，防抖
  节流 其实就在一段时间只执行一次代码， 搜索输入联想功能，一段时间内只执行一次操作，智能联想 一段时间只发送一次请求从后端获取数据
  防抖 表单提交防止多出点击 在一段时间呗，只取最后一次操作
- 七层协议和五层协议<https://blog.csdn.net/qq_22238021/article/details/80279001/>
  物理层 将信息使用比特流进行传输
  数据链路层 对数据进行处理封装成数据帧并传递和错误检测的层就是数据链路层。
  网络层 负责选择最佳的数据传输路径，并确保是沿着最佳路径传输 数据包 ip协议所处的层
  传输层 传输数据 TCP协议所在层
  应用层 直接为应用程序提供服务 http ftp
- http
    <https://juejin.im/post/5d032b77e51d45777a126183/>
    <https://juejin.im/post/5ba68c17f265da0a9e530d70/>
    那么在HTTP2.0下，我们就不需要做文件合并，不需要CDN放不同域名下
    头部压缩 通信双方缓存了一份静态header表，避免重复上传，如果静态中存在使用索引
- 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)两种调用方式。

``` js
  function sum() {
      let args = arguments;
      if (arguments.length === 2) {
          return parseInt(arguments[0]) + parseInt(arguments[1]);
      } else {
          return function(value) {
              return parseInt(args[0]) + value;
          }
      }
  }
 ```

- 函数柯里化
- 实现一个单链表， 具备插入、查找方法

``` js
class Node {
    constructor() {
        this.next = null
        this.value = ''
    }
}
class LinkList {
    constructor() {
        this.head = null
    }
    insert(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let tmp = this.head;
            while (tmp) {
                if (tmp.next === null) {
                    tmp.next = node;
                }
                tmp = tmp.next;
            }
        }
    }
    search(value) {
        let tmp = this.head;
        let index = 1;
        while(tmp) {
            if (tmp.value === value) {
                return index;
            } else {
                tmp = tmp.next
            }
            index++;
        }
        return false;
    }
}
```

- 使用JS实现一个repeat方法

``` js
  function repeat (func, times, wait) {
  // TODO
  }，
  const repeatFunc = repeat(alert, 4, 3000),
  调用这个 repeatedFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒
  function repeat(func, times, wait) {
      let i = 0, interval;
      return function (value) {
          interval = setInterval(function() {
          if (i === times ) {
              clearInterval(interval)
          }  
          func(value);
          i++
      }, wait)
      }
  }
  const repeatFunc = repeat((), 4, 3000);
  repeatFunc('helloworld');
 ```

- 请为所有数组对象添加一个flatten()方法, 返回其扁平结构
  tip: 跳过Objects, null, undefined, Function, RegExp, ....
  // test1
  [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flatten() => [1,2,3,4,5]
  // test2
  [['a','b'], [0,['a']], [false], null].flatten() =>
  ['a','b',0,'a',false]

 ``` js
  Array.prototype.flatten = function() {
      let arr = this;
      function flat(arrs) {
          let result = [];
          for (let i = 0; i < arrs.length; i++) {
              if (Array.isArray(arrs)) {
                  result.concat(flat(arrs[i]));
              } else {
                  result.push(arrs[i])
              }
          }
          return result;
      }
      return flat(arr);
  }
 ```

- 下面的输出

``` js
  console.log('start');
  let intervalId;
  Promise.resolve()
    .then(() => {
    console.log('p1');
  }).then(() => {
    console.log('p2');
  });

  setTimeout(() => {
    Promise.resolve()
      .then(() => {
      console.log('p3');
    }).then(() => {
      console.log('p4');
    });
    intervalId = setInterval(() => {
      console.log('interval');
    },3000);
    console.log('timeout1');
  },0);
 ```

- 判断一个请求是否是ajax

``` js
    String requestType = request.getHeader("X-Requested-With");
    if("XMLHttpRequest".equals(requestType)){
        System.out.println("AJAX请求..");
    }else{
        System.out.println("非AJAX请求..");
        //此时requestType为null
    }
 ```

- 请求头 和 响应头
- 怎么设置cors
    Access-Control-Allow-Origin 该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。
    Access-Control-Allow-Credentials: true 表示是否允许发送Cookie
    Access-Control-Expose-Headers: FooBar
        。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段的值。
- content-Type 的值 application/x-www-form-urlencoded multipart/form-data text/plain
    application/x-www-form-urlencoded
        浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。请求类似于下面这样 提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。
        title=test&sub%5B%5D=1&sub%5B%5D=2&sub%5B%5D=3
    multipart/form-data
    application/json
        application/json 这个 Content-Type 作为响应头大家肯定不陌生。实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify，服务端语言也都有处理 JSON 的函数，使用 JSON 不会遇上什么麻烦。
- 变量提升（Hoisting）由此可见函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。
  函数作为一等公民，先被提升，变量声明后被提升，所以可能会发生被后面的变量赋值覆盖
  对象才能使用静态变量
  js只有全局作用域和函数作用域 当有if这种的使用发生变量提升的时候会在全局作用域中提升，或者函数作用域提升
  js 作用域， 只有两种 全局作用域和函数作用域
  在同一个作用域中后面的变量声明会覆盖前面的，后面的函数变量声明会覆盖前面的，

``` js
  function Foo () {
      getName = function () {
          console.log(1)
      }
      console.log('this is' + this)// 这里this将会调用Object.prototype.toString(this)方法所以为this is [object Object]
      return this
  }

  Foo.getName = function () {
      console.log(2)
  }
  Foo.prototype.getName = function () {
      console.log(3)
  }
  var getName = function () {
      console.log(4)
  }
  function getName () {
      console.log(5)
  } // 请写出一下的输出结果
  Foo.getName() // 2
  getName() // 4
  Foo().getName() //报错 4
  getName() // 4
  new Foo.getName() // 2
  new Foo().getName() // 3
  new new Foo().getName() // 3
  ```

- 自己添加

``` js
function Test() {
  var one = function() { // 无法被访问相当于私有方法  在外部不管怎么样都是无法被访问的， 除非使用闭包
    console.log(2)
  }
  // 注意这两额的区别因为上面的使用var所以作为私有变量， 而下面的由于没有使用 var这些进行变量声明，作为全局变量，但是要在函数执行后才会进行变量的声明
  test = function () {

  }
}
Test.test = function() { // 静态方法直接可以通过 Test 访问
  console.log(4)
}
Test.prototype.test = function() { // 实例方法，必须通过 new Test() 才能访问
  console.log(5)
}
Test.test = function () {
  console.log(3)
}
var test = function() { // 进行变量提升
  console.log(6);
}
function test() { // 进行变量提升 但是函数作为一等公民， 先提升，函数作为变量提升不会被覆盖，但是在进行赋值的时候会被覆盖
  console.log(7);
}
Test.test() // 输出3 后面的覆盖前面Test.test 静态方法的定义
test() // 将会输出6 因为函数作为一等公民先进行提升 而且函数是整个进行提升不会被后提升的 test变量覆盖， 但是由于变量test的赋值 所以讲function test 覆盖
// 下面两个的输出是一样的说明是一样的
new Test().test(); // 输出 5
// new new Test().test(); // 输出 5
Test();
console.log(one)
```

// js继承
// 字符串子回文
// 链表翻转
// cors head有什么区别
// 时间循环会等到微任务执行完才去执行宏任务
// redux connect
// 数组去重含有字符数字怎么处理
// react vue 小程序 区别
http连接具体过程
function all(arrs) {
    return new Promise((resolve, reject) => {
        let result = [];
        let i = 0;
        fot(let i = 0; i < arrs.length; i++) {
          arrs[i].then(res => {
              result.push(res);
              i++;
              if (i === arrs.length) {
                  resolve(result);
              }
          }, (err) => {
            reject(err);
          })
        }
    })
}
promise 串行 reducer实现
    function runPromiseByQueue(myPromises) {
        myPromises.reduce((pre, next) => pre.then((res) => {
          res
          return next;
        }));
    }
怎么判断某一个文件是否传输完成
服务端推送 websocket ajax 轮询 具体就是使用setTimeout实现
    SSE(Server-Sent-Events,服务器发送事件) API 用于创建到服务器的单向连接

function func(arr) {
    if (arr.length === 0) return;
    arr[arr.length-1]++;
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] === 10) {
            arr[i] = 0;
            if (i === 0) {
                arr.unshift(1);
            } else {
                arr[i-1] = arr[i-1] + 1;
            }
        } 
    }
    return arr;
}

console.log("1");

setTimeout(function() {
  console.log("2");
  process.nextTick(function() {
    console.log("3");
  });
  new Promise(function(resolve) {
    console.log("4");
    resolve();
  }).then(function() {
    console.log("5");
  });
});
process.nextTick(function() {
  console.log("6");
});
new Promise(function(resolve) {
  console.log("7");
  resolve();
}).then(function() {
  console.log("8");
});