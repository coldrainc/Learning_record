function Person() {
  this.age = 0;
  setTimeout(() => {
    console.log(this);
  }, 3000);
}

function Person1() {
  this.age = 0;
  setTimeout(function() {
    console.log(this);
  }, 3000);
}


// var p = new Person();
// var p1= new Person1();
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}
obj.b();
obj.c();