let str = '  dafdafs dafd  ';
// let result = str.split(' ');
// console.log(result);
let test = {
  1: 1,
  false: 1 
};
test.child = {}

// splice 操作原数组
let arr = [1, 2, 3];
// console.log(arr.splice(0,1)); 
// console.log(arr);
let newStr = str.replace(/(^\s*)|(\s*$)/g, ''); // 去除左右空白
// console.log(newStr); 

// 判断两个对象是否相等

let B = {
  a: 1,
  b: 2
}
let C = {
  a: 1,
  b: '2'
}

// console.log(JSON.stringify(A) === JSON.stringify(B)); // true
// console.log(JSON.stringify(A) === JSON.stringify(C)); // false
// console.log(JSON.stringify(B)); // {"a":1,"b":2}
// console.log(JSON.stringify(C)); //{"a":1,"b":"2"}

console.log(100+"100"); // 100100
console.log(100+undefined); // NAN undefined = NAN
console.log(100+true) // 101
console.log(100+false) // 100
console.log(100+null) // 100

let obj = {};
let obj1 = Object.create(null); // 这就是直接创建一个空对象
let obj2 = Object.create({});
let obj3 = {};
obj3.__proto__ = undefined;
// console.log(Object.toString(obj)) // function 
// console.log(Object.toString(obj1)) // functionn
// // obj obj1 都是一个空对象 
// console.log(Object.toString(obj2)) // function
// console.log(Object.toString(obj3)) // function
