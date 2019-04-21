Function.prototype.myCall = function (obj) {
  if (typeof obj === 'undefined' || obj ===  null) {
    obj = window;
  }
  obj.fn = this;
  let args = [...arguments].slice(1);
  let result = obj.fn(...args);
  delete obj.fn;
  return result;
}