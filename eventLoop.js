setTimeout(() => {
  debugger
  console.log('---------1');
}, 0);

function test() {
  console.log('2');
  debugger
  Promise.resolve().then(test);
}

test();
