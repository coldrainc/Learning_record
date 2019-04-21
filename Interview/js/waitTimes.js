function watiTimes (func, wait, times) {
  let n = 0;
  let interval = setInterval(() => {
    func();
    n++;
    if (n === times) (
      clearInterval(interval)
    )
  }, wait)
}