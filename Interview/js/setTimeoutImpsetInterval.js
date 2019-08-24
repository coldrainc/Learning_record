function mySetInterval(func, awiat) {
  function interval(interval, awiat) {
    setTimeout(interval, awiat);
    func();
  }
  setTimeout(interval, awiat);
}
