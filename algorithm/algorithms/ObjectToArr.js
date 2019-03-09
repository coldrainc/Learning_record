var objects = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  test: 'test',
  length: '4',
}
// arguments转数组其实就是对象转数组、
let result = Array.prototype.slice.call(objects);
let result1 = [].slice.call(objects);
console.log(result.test); // 不存在

let arr = [1, 2, 3, 4, 5, 1, 3, 3, 5];

function uniq(arr) {
  let ob = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!ob[arr[i]]) {
      ob[arr[i]] = true;
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(uniq(arr));