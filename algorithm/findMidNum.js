function findMidNum (arr1, arr2) {
  let mid;
  let newArr = arr1.concat(arr2);
  newArr = newArr.sort((a, b) => {
    return a - b;
  })
  console.log(newArr, newArr.length);
  if (newArr.length%2!==0) {
    mid = parseInt(newArr.length/2);
    return newArr[mid];
  } else {
    mid = newArr.length/2;
    return (newArr[mid] + newArr[mid-1])/2;
  }
}

let arr1 = [1,2,4], arr2 = [3,4,5,6];

console.log(findMidNum(arr1, arr2));