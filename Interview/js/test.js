// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Student(name, age, grade) {
//   Person.apply(this, arguments);
//   this.grade = grade;
// }

// var stu = new Student('test', 11, 1212);
// console.log(stu.name, stu.age, stu.grade);

// var a = 5;
// (function() {
//     var a = b = 3;
// })();
// console.log(a);
// console.log(b);
console.log([] == ![]); // 左边 [] 转为0 右边 ![] []在判断的时候为true 所以为false false转为0 所以为true
console.log(0 == null) // 判断false还是ture一共有12步，在前面11步不通过的时候，最后返回false 只有null和undefined比较为ture
console.log(Object.prototype.toString.call(new Number(3))); // 返回[Number: 3]
console.log(new String('str')) // 返回 [String: 'str']
console.log(!![])
let a = { a: 1};
let b = { b: 1};

console.log(a == b)
