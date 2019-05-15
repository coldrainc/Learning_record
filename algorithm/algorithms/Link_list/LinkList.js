import LinkListNode from './linkListNode';
import Comparator from '../utils/comparator/Comparator';

export default class LiskList {
  /**
   * @param {Fucntion} [compareFunction]
   */
  constructor(compareFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compareFunction);
  }
  /**
   * 链表头部插入节点
   * @param {*} value
   * @return {LinkList}
   */
  prepend(value) {
    const newNode = new LinkListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  /**
   * 尾部添加节点
   * @param {*} value
   * @return {LiskList}
   */
  append(value) {
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  /**
   * @param {*} value
   * @return {LinkListNode}
   */
  delete(value) {
    if (!this.head) return null;
    let deleteNode = null;
    while(this.head && this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while(currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.compare(this.tail.value), value) {
      this.tail = currentNode;
    }
    return deleteNode;
  }
  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
  }

  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  reverse() {
    let currentNode = this.head;
    let preNode = null;
    let nextNode = null;

    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = preNode;
      
      preNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = preNode;
    return this;
  }
}