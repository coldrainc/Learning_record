let arr = [212, 2, 10, 231, 122];

function getMaxProfit(arr) {
  let max=arr[0], min=arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max-min;
}

console.log(getMaxProfit(arr));