function Permutation(str)
{
  if (str.length === 0) return [];
  let strArr = str.split('');
  let result = [];
  result = Permut(strArr, strArr.length, 0);
  return result;
}

function Permut(arr, len, index) {
  let result = [];
  let isRepeat = {};
  if (len === index) {
    // console.log(arr)
    result.push(arr.slice().join(''));
  }
  for (let i = index; i < len; i++) {
    if (!isRepeat[arr[i]]) {
      swap(arr, index, i);
      result = result.concat(Permut(arr, len, index+1));
      swap(arr, index, i);
      isRepeat[arr[i]] = true
    }
  }
  return result;
}

function swap(arr, i, index) {
  let tmp = arr[i];
  arr[i] = arr[index];
  arr[index] = tmp;
}

// function isSwap(arr, len, i) {
//   for (let j = i+1; j < len; j++) {
//     if (arr[j] === arr[i]) {
//       return false
//     }
//   }
//   return true;
// }

let result = Permutation('abc')
console.log(result)
