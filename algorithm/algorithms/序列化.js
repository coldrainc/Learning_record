function arrayToObject(arr) {
    const obj = {};
  
    for (let i = 0; i < arr.length; i += 2) {
      let currentObj = obj;
  
      for (let j = 0; j < arr[i] - 1; j++) {
        const key = arr[i - 1];
        if (!currentObj[key]) {
          currentObj[key] = {};
        }
  
        currentObj = currentObj[key];
      }
  
      const key = arr[i];
      if (Array.isArray(arr[i + 1])) {
        currentObj[key] = arrayToObject(arr[i + 1]);
      } else {
        currentObj[key] = arr[i + 1];
      }
    }
  
    return obj;
  }
  
  const arr = [0, 'a', 1, 'b', 2, 'c', 3, 'd', 2, 'e', 0, 'f', 1, 'g'];
  const obj = arrayToObject(arr);
  
  console.log(obj);