function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, grade) {
  Person.apply(this, arguments);
  this.grade = grade;
}

// var stu = new Student('test', 11, 1212);
// console.log(stu.name, stu.age, stu.grade);

var a = 5;
(function() {
    var a = b = 3;
})();
// console.log(a);
// console.log(b);
console.log([] == ![]);