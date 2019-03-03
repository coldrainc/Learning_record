// 插入排序， 左边的为已经排序后的，当右边的第一个值比较左边的值，左边的大于右边的则进行交换

function insertSort(arr) {
  var tmp;
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[i]) {
        tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr
}

var arr = [199, 19, 78, 1, 22, 19]
console.log(insertSort(arr));