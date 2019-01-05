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