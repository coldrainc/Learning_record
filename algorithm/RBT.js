const RED = true;
const BLACK = false;

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = RED;
  }
}

class RBT {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  isRed(node) {
    if(!node) return  BLACK;
    return node.color;
  }
  // 左旋转
  leftRotate(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.color = RED;
    return tmp;
  }
  // 右旋转
  rightRorate(node) {
    let tmp = node.left;
    node.left = tmp.left;
    tmp.right = node;
    tmp.color = node.color;
    node.color = RED;
    return tmp;
  }
}