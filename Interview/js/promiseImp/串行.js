function iteratorPromise(arr) {
  let res = Promise.resolve();
  arr.forEach(fn => {
    res = res.then(() => fn());
  });
}

function runPromiseByQueue(myPromises) {
  myPromise.reduce((pre, next) => pre.then(() => next()), Promise.resolve())
}
