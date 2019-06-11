function news (Base) {
  let obj = {};
  obj.__proto__ = Base.prototype;
  Base.call(obj);
  return obj;
}