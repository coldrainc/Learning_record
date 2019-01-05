function Person() {
  this.age = 0;
  var test = () => {
    console.log(this)
  }
  test() // 指向Person对象
  // setTimeout(() => {
  //   console.log(this); 
  // }, 3000);
}

function Person1() {
  this.age = 0;
  function test() {
    console.log(this)
  }
  test();// 指向window
  // setTimeout(function() {
  //   console.log(this); // 指向timeout
  // }, 3000);
}


// var p = new Person();
// var p1= new Person1();
var obj = {
  i: 10,
  b: () => console.log(this.i, this), // 指向window
  c: function() {
    console.log(this.i, this); // 指向obj
  }
}
obj.b();
obj.c();

// 这两个例子可以看出 构造函数中this 和对象中this也是不一样的