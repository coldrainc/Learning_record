Array.prototype.reduceImpMap = function (fn, thisArg) {
  let list = this;
  return (list) => {
    if (typeof fn !== 'function') {
      throw new TypeError(`${fn} is a not function`);
    }
    if (!Array.isArray(list)) {
      throw new TypeError(`list must is a Array`);
    }
    if (list.length === 0) return [];
    return list.reduce((pre, cur) => {
      return pre.push(fn.call(thisArg, cur));
    },[])
  }
}
Array.prototype.reduceToMap = function (fn) {
  return this.reduce((pre, cur) => {
    return pre.push(fn(cur))
  }, [])
}