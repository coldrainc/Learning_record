function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for(let i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObj[i] = typeof obj[i] === 'object' ? deepCopy(newObj) : obj[i];
    }
  }
  return newObj;
}