export default class Comparator {
  /**
   * @param {function(a:*, b:*)} [compareFunction] 自定义比较功能
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }
  /**
   * 默认比较方法 只比较 a，b作为字符串或者数字
   * @param{(string|number)}a
   * @param{(string|number)}b
   * @return {number} 
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  /**
   * 比较两个值是否相等
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }
  /**
   * 检查 a 小于 b
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }
  /**
   * 检查a 大于 b
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }
  /**
   *  a 小于或等于 b
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.compare  <= 0;
  }
  /**
   * a 大于等于 b
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.compare >= 0;
  }
  /**
   * 翻转顺序
   */
  reverse() {
    const compareOrigin = this.compare;
    this.compare = (a, b) => compareOrigin(b, a)
  }
}