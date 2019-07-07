function triangle (num) {
  let arr = [];
  for (i = 0; i < num; i++) {
    arr[i] = new Array(i);
  }
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i+1; j++) {
      if (i === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = (arr[i-1][j-1] || 0) + (arr[i-1][j] || 0);
      }
    }
  }
  return arr;
}

console.log(triangle(10));