class FifoCache {
  constructor(limit) {
    this.limit = limit || 10;
    this.map = {};
    this.keys = []
  }

  set(key, value) {
    let map = this.map;
    let keys = this.keys;
    if (!Object.prototype.hasOwnProperty.call(map, key)) {
      if (keys.length === this.limit) {
        delete map[keys.shift()];
      }
      keys.push(key);
    }

    map[key] = value;
  }

  get(key) {
    return this.map[key];
  }
}