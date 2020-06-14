function mySetInterval(func, awiat) {
  function interval(interval, awiat) {
    func();
    setTimeout(interval, awiat);
  }
  setTimeout(interval, awiat);
}
