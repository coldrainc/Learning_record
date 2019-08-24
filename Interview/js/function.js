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
// 发现自己把自己搞蒙蔽了， 函数执行还是从上到下的，由于有变量提升的问题，变量生会提升到前面，所以有一些在变量定义的问题可能有覆盖等问题