class EventEmitter {
  constructor() {
    this._events = {}
  }
  on(event, callback) {
    if (!event || !callback) {
      return false
    }
    let callbacks = this._events[event] || [];
    callbacks.push(callback);
    this._events[event] = callbacks;
    return this;
  }

  emit(event, ...args) {
    if (!event) {
      return;
    }
    let callbacks = this._events[event];
    callbacks.forEach(item => {
      item(...args);
    })
    return this;
  }
  once(event, callback) {
    let wrapFunc = (...args) => {
      callback.apply(this, args);
      this.off(event, wrapFunc);
    }
    this.on(event, wrapFunc)
    return this;
  }
  off(event, callback) {
    if (!event || !call) {
      return;
    }
    let callbacks = this._events[event];
    let index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    this._events[event] = callbacks;
  }
}