var arr = [199, 19, 78, 1, 22, 19]

// 冒泡排序, 将大的值向后冒泡，每一次可以获取一个当前排序的最大值
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length-i; j++){
      var temp;
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr));