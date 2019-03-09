// 获取从0 - n的数组
function getArr(n) {
  let arr = [];
  for(let i = 0; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// 获取打乱数字数组的顺序
// sort 按照数组顺序传递两个数，当返回的为正数时两个数字进行交换
function changeSort(arr) {
  return arr.sort((a, b) => {
    return Math.random() - 0.5;
  })  
}

console.log(getArr(10));
console.log(changeSort([10, 129, "121", 12]))
