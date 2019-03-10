// var arr = [1, 2, 3]
var arr = [1, 2, 4, 2];
var len = 4;
var arr1 = [];
var num = 0;
function isSwap(arr, len, index) { // 判断是否需要交换
  for(let i = index+1; i < len; i++) {
    if(arr[index] == arr[i]){
      return false;
    }
  }
  return true;
}
function swap(arr, i, j) { // 交换数组的两个值
  var tmp = 0;
  tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// 递归实现全排列
// 参数传递的时候注意数组为引用类型，不能直接使用
function permutation(arr, len, index) {
  if(index == len){ // 结束
    num++;
    let arr2 = arr.slice(0,len); 
    arr1.push(arr2)
    return;
  }
  for(let i = index; i < len; i++) {
    // let arr2 = arr.slice(0, 4);
    if(isSwap(arr, len, i)){ // p\判断是否交换
      swap(arr, index, i);// 将第i个元素交换到当前index下标下，
      permutation(arr, len, index+1);
      swap(arr, index, i)// 将值换回来，使得在同一个位置下次全排列值是原来的
    }
  }
}

permutation(arr, len, 0)
// console.log(arr1)

function permutation1(arr, index) {
  let result = [];
  function main(arr, index) {
    if (arr.length === index) {
      let newArr = arr.slice();
      result.push(newArr);
    } else {
      for (let i = index; i < arr.length; i++) {
        swap(arr, index, i);
        main(arr, index + 1);
        swap(arr, index, i);
      }
    }
  }
  main(arr,index);
  return result;
}
console.log(permutation1([1, 2, 3], 3, 0))