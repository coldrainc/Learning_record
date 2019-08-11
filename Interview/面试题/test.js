function test() {
  let test1 = function() {
    console.log('test1');
  }
  test2 = function() {
    console.log('test2')
  }
}

// test.test1()
// test.test2()
let obj = {
  a: 1,
  fn: function() {
    return () => {
      console.log(this);
      (function() {console.log(Object.prototype.toString.call(this))})();
      setTimeout(function(){console.log(Object.prototype.toString.call(this))})
    }
  },
  test: () =>{
    console.log(this)
  }
}
// obj.test()
obj.fn()();