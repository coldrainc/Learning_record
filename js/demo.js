const a = [1, 2, 3, 4, 5]
Array.prototype.multiply = function() {
  this.forEach(item => {
    this.push(item * item)
  })
}
a.multiply();
console.log(a);