Function.prototype.my = function (obj) {
  if (typeof obj === 'undefined' || obj === null) {
    obj = window;
  }
  let args = arguments[1];
  obj.fn = this;
  let result = obj.fn(...args);
  delete obj.fn;
  return result;
}