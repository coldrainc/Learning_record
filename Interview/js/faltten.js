// 数组扁平化
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i])
    }
  } 
  return result;
}

function flatten2(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten2(arr[i]));
    } else {
      result.push(arr[i])
    }
  }
  return result;
}