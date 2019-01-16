function test() {
  var a = 1;
  console.log(this)
  global.test1 = function(){
    console.log(a)
  }
}

global.test1()