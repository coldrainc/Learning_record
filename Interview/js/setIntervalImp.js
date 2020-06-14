function mySetinterval(func, time) {
  let timer;
  let startTime = Date.now();
  let endTime = startTime;
  function loop() {
    endTime = Date.now();
    if (endTime - startTime >= time) {
      startTime = endTime = Date.now();
      timer = window.requestAnimationFrame(loop);
      func()
    }
  }

  timer = window.requestAnimationFrame(loop);

  return timer;
}

let test = mySetinterval(() => {}, 10);

cancelAnimationFrame(test);