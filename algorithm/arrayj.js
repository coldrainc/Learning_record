var arr = [1, 2, 2, 3, 4, 5, 5, 5];

// 利用Set内值是唯一的
function unique(arr) {
  return [...new Set(arr)]
}

// 利用对象的key value
function unique1(arr) {
  let hashTable = {};
  let data = [];
  for(let i = 0; i < arr.length; i++) {
    if(!hashTable[arr[i]]){
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data;
}

console.log(unique(arr))