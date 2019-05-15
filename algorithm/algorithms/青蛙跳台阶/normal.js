// 每次跳一个台阶或者两个台阶
// 斐波那契数列
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// 题解 青蛙要到第n阶台阶那么他只能从n-1 或者n-2届阶台阶上来