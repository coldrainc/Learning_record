class MyPromise {
  constructor(executor) {
    this.value = null;
    this.status = 'pending';
    this.reason = null;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];
  }
}