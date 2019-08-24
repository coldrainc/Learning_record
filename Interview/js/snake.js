function snakeMartix(num) { // 输入一个数组输出一个二维的n*n的回形数组
  let results = new Array(num);
  for (let i = 0; i < num; i++) {
    results[i] = new Array(num);
  }
  
  let begin = 1;
  let top = 0, right = num - 1, bottom = num - 1, left = 0;
  while( top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      results[top][i] = begin;
      begin++;
    }

    for (let i = top+1; i <= bottom; i++) {
      results[i][right] = begin;
      begin++;
    }

    if (top !== bottom) {
      for (let i = right - 1; i >= left; i-- ) {
        results[bottom][i] = begin;
        begin++;
      }
    }

    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        results[i][left] = begin;
        begin++;
      }
    }

    top++; right--; bottom--; left++;
  }
  
  return results;
} 

console.log(snakeMartix(5));

let arr = snakeMartix(5);
const snake = function (arr) { // 将一个二维数回形打印
  let row = arr.length;
  let col = arr[0].length;
  let left = 0, top = 0, right = col - 1, bottom = row - 1;
  let results = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right;  i++) {
      results.push(arr[top][i])
    }
    for (let i = top + 1; i <= bottom; i++) {
      results.push(arr[i][right]);
    }

    if (top !== bottom) {
      for (let i = right-1; i >= left; i--) {
        results.push(arr[bottom][i]);
      }
    }

    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        results.push(arr[i][left]);
      }
    }

    top++; left++; right--; bottom--;
  }
  return results;
}

// console.log(arr)
console.log(snake(arr))