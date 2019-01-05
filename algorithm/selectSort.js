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
  console.log(arr);
  return arr;
}
var arr = [199, 19, 78, 1, 22, 19]

console.log(selectSort(arr))