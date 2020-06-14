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

Function.prototype.call = function(obj) {
  if (typeof obj !== 'function') {
    throw new Error('Error');
  }

  let context = obj || window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}
