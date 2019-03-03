var objects = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  test: 'test',
  length: '4',
}

let result = Array.prototype.slice.call(objects);
console.log(result.test);