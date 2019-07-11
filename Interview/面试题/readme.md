# 面试
- position
- 实现三角形
- udp/tcp区别，
- instanceof和typeof区别
- setTimeout定时问题
- 七层协议和五层协议<https://blog.csdn.net/qq_22238021/article/details/80279001/>
- 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)两种调用方式。
```
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
```
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
- 使用JS实现一个repeat方法，
```
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
 ```
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
```
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
```
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
```
  function Foo () {
      getName = function () {
          console.log(1)
      }
      console.log('this is' + this)
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
  Foo.getName()
  getName()
  Foo().getName()
  getName()
  new Foo.getName()
  new Foo().getName()
  new new Foo().getName()
  ```
- 自己添加
```
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
