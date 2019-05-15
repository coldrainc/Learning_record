// 斐波那契数列 
// 青蛙跳台阶问题
var fibonacci = function(n) {
  sum++;
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2)
}
var sum = 0;
var result = fibonacci(4);

console.log(result)
console.log("sum = " + sum);

function optFib(a, b, n) {
  sum1++;
  return n < 2 ? b : optFib(b, a+b, n-1);
}
var sum1 = 0;
console.log(optFib(0, 1, 4));
console.log("sum1 = " + sum1);