async function async1(params) {
  console.log('async1 start');
  await async2(); // 运行到此处的时候会先跳出函数，先执行外面的代码
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() { // 最后执行
  console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
  console.log('promise');
  resolve();
}).then(function () {
  console.log('promise2')
})



console.log('\n\n');

async function async3() {
  console.log('async3 start');
  await async2();
  console.log('async3 end');
}
async function async2() {
  console.log('async4')
}
async3();
console.log('script start');