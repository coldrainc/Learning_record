# 今日头条

1 现在有两堆石子,小今与小条玩游戏,2个人都足够聪明,两个人规定:每次每人只能从其中一堆中取走1个或2个或3个石子,最后将石子全部取完的人胜利.现在两堆石子的个数为8和9,请问如何安排才能让小今必胜?
  A.让小今先取
  B.让小条先取
  C.没有策略能够让小今必胜
  D.以上说法都不正确
  答案 A 只需要谁在取石子的时候为4的倍数 谁就是是输 当小今在9中取1个无论小条怎么取，小都可以取取完剩余4的倍数，
  当剩余4个的时候还是小条取，所以在最后小今可以取完；

2 弹出结果
  <script> 
    var m= 1, j = k = 0;
    function add(n) {
      return n = n+1;
    }
    y = add(m);
    function add(n) {
      return n = n + 3;
    }
    z = add(m);
  </script>
  y, z结果都为 4 函数和变量提升的问题 由于函数的提升，第二个会覆盖第一个，所以最后在使用的时候都是 第二个add函数

3 结果
  (function() {
     var a = b = 5;
  })();
  console.log(b); 5
  console.log(a); ReferenceError
  由于b未使用var定义所以作为全局变量并且被赋值为了5 所以b在全局可以被使用
  代码实际执行为
  var b;
  (function() {
    var a;
    b = 5;
    a = b;
  })()
4 H新增表单元素
  dataList
  keygen
  output
5 置换元素
  浏览器根据元素的标签和属性， 来决定具体显示内容
  例如 img 置换为 图片
6 进程线程
  进程是资源分配的最小单位， 有自己独立的地址空间， 由于是对立不会影响其他的进程
  线程是程序执行的最小单位， 线程间共享地址空间， 同一进程中的线程会影响其他线程
    共享资源：堆，全局变量，静态变量，文件等公共资源
    不共享：栈，寄存器
7 排序算法稳定性
  希尔排序， 快速排序，选择排序， 堆排序都不稳定
  其他的稳定
8 回文解码
  palindrome.js
9 promise、setTimeout、async/await的执行顺序
  promise里面的代码属于同步的代码，异步性体现在.then .catch 处
  async await  await右边的代码会先执行，然后在await 处等待跳出async函数
  promise.Trick()>promise的回调>setTimeout>setImmediate
  promise为微任务，进入任务队列 执行完同步代码后，根据队列中异步代码先进的代码先执行
  setTimeout为宏任务 进入响应的队列 最后执行
10 eventEmitter
11 arguments
  arguments其实是一个对象，它与数组一样有索引以及length的属性。但是却不能使用数组的方法。
  但是在实际开发中，我们使用arguments可以很方便的获取到所有的实参，并且也需要对其使用是写数组的方法。
  Array.prototype.slice.call(arguments);
  [].slice.call(arguments);