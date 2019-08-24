// 最大连续子串和
// N^2
function maxSequence(arr, len) { // 直接通过遍历 
  let max = arr[0], sum;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

// 最大连续子串 
// N
function maxSequence2(arr, len) {
  let maxSum = 0, maxHere = 0;
  for (let i = 0; i < len; i++) {
    if (maxHere <= 0) {
      maxHere = a[i];
    } else {
      maxHere += a[i];
    }
    if (maxHere > maxSum) {
      maxSum = maxHere;
    }
  }
  return maxSum;
}