function snakeMartix (num) {
  let results = new Array(num);
  for (let i = 0; i < num; i++) {
    results[i] = new Array(num);
  }
  
  let begin = 1;
  let top = 0, right = num - 1, bottom = num - 1; left = 0;
  while( top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      results[top][i] = begin;
      begin++;
    }

    for (let i = top + 1; i <= bottom; i++) {
      results[i][right] = begin;
      begin++;
    }

    if (top !== bottom) {
      for (let i = right - 1; i >= left ; i--) {
        results[bottom][i] = begin;
        begin++;
      }
    }

    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        results[i][left] = begin;
        begin++
      }
    }

    top++; right--; bottom--; left++;
  }
  return results
}

function snake(arr) {
  let top = 0, right = arr[0].length - 1, bottom = arr.length - 1, left = 0;
  let results = [];
  while(top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      results.push(arr[top][i])
    }

    for (let i = top + 1; i <= bottom; i++) {
      results.push(arr[i][right]);
    }

    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        results.push(arr[bottom][i]);
      }
    }

    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        results.push(arr[i][left]);
      }
    }

    top++; right--; bottom--; left++;
  }
  return results;
}

console.log(snake(snakeMartix(10)));