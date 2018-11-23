var name = 'hh';
var obj = {
  name: 'kk',
  func1: function() {
    console.log(this);
  },
  func2: function() {
    setTimeout(function(){
      console.log(this.obj)
    }, 1000)
  }
}
obj.func1();
console.log(this)
obj.func2();