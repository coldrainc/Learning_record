
function *fetch() {
  yield 'test1';
  yield 'test2';
  yield 'test3';
}

let result = fetch();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());