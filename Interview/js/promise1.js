const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(handle) {
    if (typeof handle !== 'function') {
      throw new Error('MyPromise must accept a function as a paramter');
    }
    this._status = PENDING;
    this._value = undefined;
    this._fulfilledQueues = [];
    this._rejectedQueues = [];
    try {
      handle(this._resolve.bind(this),this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }
  _resolve(val) {
    if (this._status !== PENDING) {
      return;
    }
    this._status = FULFILLED;
    this._value = val;
    this._fulfilledQueues.forEach(item => item(val))
  }
  _reject(val) {
    if (this._status !== PENDING) {
      return;
    }
    this._status = REJECTED;
    this._value = val;
    this._rejectedQueues.forEach(item => item(val))
  }
  then(onFulfilled, onRejected) {
    const { _value, _status } = this;
    switch (_status) {
      case PENDING: 
        this._fulfilledQueues.push(onFulfilled);
        this._rejectedQueues.push(onRejected);
        break;
      case FULFILLED:
        onFulfilled(_value);
        break;
      case REJECTED:
        onRejected(_value)
        break;
    }
    return new MyPromise((onFulfilled, onRejected) => {
    })
  }
}