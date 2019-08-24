class EventEmmiter {
  constructor() {
    super();
    this.events = {};
    // this.onceEvents = {};
  }

  on(event, func) {
    if (!event || !func) return false;

    let callbacks = this.events[event] || [];
    callbacks.push(func);

    this.events[event] = callbacks
  }

  emit(event, ...args) {
    if (!event) {
      return false
    }
    let callbacks = this.events[event];

    if (callbacks > 0) {
      callbacks.forEach(item =>{
        item(...args);
      })
    }
  }

  off(event, func) {
    if (!event || !func) {
      return false
    }

    let callbacks = this.events[event];
    let index = callbacks.indexOf(func);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    this.events[event] = callbacks;
  }
}