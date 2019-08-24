Function.prototype.myApply = function(context) {
  let context = context || window;
  let args = arguments[1];
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
}