var name = 'hh';
var obj = {
  name: 'kk',
  func1: function() {
    console.log(this.name);
  },
  func2: function() {
    setTimeout(function(){
      console.log(this)
    }, 1000)
  }
}
// obj.func2();
// obj.func1();
// console.log(this)
function Person() {
  this.age = 0;
  setTimeout(() =>{ // 指向全局
    console.log(this);
  }, 3000);
}
function Person1() {
  this.age = 0;
  setTimeout(function() { // 指向setTimeot
    console.log(this)
  }, 1000)
}
Person1();
Person();
