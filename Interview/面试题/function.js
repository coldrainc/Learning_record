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
var getName = function () { // 后进行提升， 赋值将会覆盖下面的function
  console.log(4)
}
function getName () { // 先进行提升 ，不会被覆盖，但是赋值的时候会被覆盖
  console.log(5)
} // 请写出一下的输出结果
Foo.getName() // 2
getName() // 4
// console.log(Foo());
// this.getName();
Foo().getName()  // 报错
getName() // 4
new Foo.getName() // 2 
new Foo().getName() // this is [object Object] 3
new new Foo().getName() // this is [object Object] 3