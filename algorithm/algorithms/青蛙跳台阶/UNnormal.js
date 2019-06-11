// 青蛙跳台阶，每次可以跳 1-n级台阶
function unNormal(n) {
  return Math.pow(2, n-1);
}

let result = unNormal(3);
console.log(result);