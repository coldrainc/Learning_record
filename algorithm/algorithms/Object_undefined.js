let A = {
  a: 1,
  c: () => {
    console.log(this.a, this) // undefined this = {} = window
  },
  d: function() {
    console.log(this.a, this); // 1 this = A
  }
}
function Test() {
  this.a = 2;
}
var test = new Test();
A.c(); // undefined window对象上没有a所以返回undefined
A.d(); // 1
// 对象中不存在的变量或者函数，在调用的时候返回的都是undefined
console.log(test.b) // 对象存在的变量报错为undefined 其实相当于有这个变量但是没有值