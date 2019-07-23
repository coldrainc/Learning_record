class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('MyPromise must accept a function');
    }
    this.value = null;
    this.status = 'pending';
    this.reason = null;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      this.reject(err);
    }
  }
  resolve(val) {
    if (this.status !== 'pending') return;
    this.status = 'resolve';
    this.value = val;
    this.onResolveCallbacks.forEach(item => item(val))
  }
  reject(err) {
    if (this.status !== 'pending') return;
    this.status = 'reject';
    this.value = err;
    this.onRejectCallbacks.forEach(item => item(err))
  }
  then() {

  }
}