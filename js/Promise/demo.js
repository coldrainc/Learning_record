async function test(){
  return '1';
}

console.log(test()) // async 返回就是一个promise

var a = 0;

async function test1() {
  a = a + await(10);
  console.log(a)
}
test1()// 在执行到await是的时候会停下来， 这个时候会保存栈中的东西所以a保存然后先执行外面的代码
console.log(a++)