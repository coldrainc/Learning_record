function myInstanceof(left, right) { /// instanceof 实现 // 左边需为实例右边需要为构造函数
  let prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) {
      return false;
    }  
    if (prototype === left) {
      return true;
    }
    left = left.__proto__;
  }
}

function Foo() {
  this.test = 'test';
}

let foo = new Foo();
console.log(foo instanceof Foo); // 左边必须为对象右边必须为为构造函数