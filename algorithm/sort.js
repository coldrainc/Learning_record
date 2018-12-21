var arr = [199, 19, 78, 1, 22, 19]

function bubbleSort(arr) {
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = 0; j < arr.length-1-i; j++){
      var temp = 0;
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    console.log(arr)
  }
  console.log(arr);
}

bubbleSort(arr);