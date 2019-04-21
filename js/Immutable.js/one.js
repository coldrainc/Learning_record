const Immutable = require('immutable');

let foo = Immutable.fromJS({a: {b: 1}});
let bar = foo.setIn(['a', 'b'], 2);
console.log(foo);
console.log(bar);