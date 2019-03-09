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
console.log(arr.splice(0,1));
console.log(arr);
let newStr = str.replace(/(^\s*)|(\s*$)/g, '');
console.log(newStr);

// 判断两个对象是否相等
let A = {
  a: 1,
  b: 2
}
let B = {
  a: 1,
  b: 2
}
let C = {
  a: 1,
  b: '2'
}

console.log(JSON.stringify(A) === JSON.stringify(B)); // true
console.log(JSON.stringify(A) === JSON.stringify(C)); // false
console.log(JSON.stringify(B)); // {"a":1,"b":2}
console.log(JSON.stringify(C)); //{"a":1,"b":"2"}
