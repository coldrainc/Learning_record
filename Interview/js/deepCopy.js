function deepCopy(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null;
  }
  if (!isObject(obj)) {
    throw new Error('非对象');
  }
  let newObj = Array.isArray(obj) ? [...obj] : {...obj};

  Object.keys(obj).forEach(item => {
    newObj[item] = isObject(obj[item]) ? deepCopy(obj[item]) : obj[item];
  })

  return newObj;
}