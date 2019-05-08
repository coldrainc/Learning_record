class EventEmitter { // 发布订阅者模式， 观察者模式
  constructor() {
    super();// 使用super才能使用this
    this.messageBox = {};
    this.onceEvents = {};
  }

  on(eventName, func) {
    if (!eventName || !func) {
      return false;
    }
    const callbacks = this.messageBox[eventName] || [];
    callbacks.push(func);
    this.messageBox[eventName] = callbacks;
  }

  emit(eventName, ...args) {
    if (!eventName) {
      return false;
    }
    const callbacks = this.messageBox[eventName];
    const onceEvents = this.onceEvents[eventName];
    if (callbacks > 0) {
      callbacks.forEach(callback => {
        callback(...args);
      });
    }
    if (onceEvents > 0) {
      callbacks.forEach(callback => {
        callback(...args);
      })
    }
    delete this.onceEvents[eventName];
  }

  off(eventName, func) {
    if (!eventName || !func) return false;
    const callbacks = this.messageBox[eventName];
    const onceEvents = this.onceEvents[eventName];
    let indexonce = onceEvents.indexOf(func);
    let index = callbacks.indexOf(func);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    if (indexonce !== -1) {
      onceEvents.splice(index, 1);
    }
  }

  once(eventName, func) {
    if (!eventName || !func) return false;
    const callbacks = this.onceEvents[eventName] || [];
    callbacks.push(func);
    this.onceEvents[eventName] = callbacks;
  }
}