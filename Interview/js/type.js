// obj = {
//   test: 'test'
// }

// arr = ['1'];

// str = 'tests'

// console.log(Object.prototype.toString.call(obj))
// console.log(Object.prototype.toString.call(arr))
// console.log(Object.prototype.toString.call(str))

let obj = {}, arr = [1];
obj.a = 100;
// arr.a = 100;
function fn() {}
console.log(fn.prototype)
fn.a = 100;
console.log(obj);
console.log(arr);
console.log(fn);
console.log(obj.__proto__);
console.log(Object.prototype === obj.__proto__)
console.log(arr.__proto__);
console.log(fn.__proto__);
let str = ' aaaaaabbb ';
console.log(str.trim())						