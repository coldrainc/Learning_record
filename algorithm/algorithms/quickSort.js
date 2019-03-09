// 取一个值然后对所有的值进行比较，比当前值小的在左边，比当前值打的在右边

function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let q = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > q) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [].concat(quickSort(left), [q], quickSort(right));
}

let arr = [100, 1, 2, 9, 20, 100];
console.log(quickSort(arr))


function quickSort1(arr) {
  if (arr.length <= 1) return arr; 
  let left = [];
  let right = [];
  let q = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < q) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [].concat(quickSort1(left), [q], quickSort1(right));
}
console.log(quickSort1(arr));