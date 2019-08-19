var a = 1;
(function() {
  console.log(this.a, a);
  var a = 2;
  console.log(this.a, a)
})()
function fn() {

}
let f = new fn();
console.log(fn.prototype.__proto__)

console.log(f.__proto__)