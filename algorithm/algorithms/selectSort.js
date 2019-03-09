// 选择排序
// 每次找到排序中最小的值，放在最前面

function selectSort(arr) {
  var tmp, index;
  for(let i = 0; i < arr.length; i++) {
    index = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[index]) {
        index = j;
      }
    }
    tmp = arr[index];
    arr[index] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}
var arr = [199, 19, 78, 1, 22, 19]

console.log(selectSort(arr))

function selectSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let t = i, tmp;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        t = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[t];
    arr[t] = tmp;
  }
  return arr;
}

console.log(selectSort1(arr));