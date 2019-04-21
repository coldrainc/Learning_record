Function.prototype.ToBind = function(obj) {
  let args = [].slice.call(arguments, 1);
  let context = this;
  return function() {
    var bindArgs = [].slice.call(arguments);
    return context.apply(obj, args.concat(bindArgs));
  }
}