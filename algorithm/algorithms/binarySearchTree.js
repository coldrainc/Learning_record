class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  // 插入
  insert(value) {
    let newNode = new Node(value, null, null);
    insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
    if (!this.root) {
      this.root = newNode;
    } else {
      insertNode(node, newNode);
    }
  }
  // 中序遍历
  inOrder() {
    let backs = [];
    const inOrderNode = (node, callback) => {
      if (node !== null) {
        inOrderNode(node.left, callback);
        backs.push(callback(node.value));
        inOrderNode(node.right, callback);
      }
    }
    function callback(value) {
      return value;
    }
    inOrderNode(this.root, callback);
    return backs;
  }
  // 先序遍历
  preOrder() {
    let backs = [];
    const preOrderNode = (node, callback) => {
      if (node !== null) {
        backs.push(callback(node.value));
        preOrderNode(node.left, callback);
        preOrderNode(node.right, callback);
      }
    }
    function callback(value) {
      return value
    }
    preOrderNode(this.root, callback);
    return backs;
  }
  // 后序遍历
  postOrder() {
    let backs = [];
    const postOrderNode = (node, callback) => {
      if (node !== null) {
        postOrderNode(node.left, callback);
        postOrderNode(node.right, callback);
        backs.push(callback(node.value));
      }
    }
    function callback(value) {
      return value
    } 
    postOrderNode(this.root, callback);
    return backs;
  }
  // 广度优先遍历
  level() {
    if (this.root === null) return;
    let que = [];
    let backs = [];
    const node = this.root;
    que.push(root);
    while (que.length > 0) {
      node = que.shift();
      backs.push(node.value);
      if (node.left) {
        que.push(node.left);
      }
      if (node.right) {
        que.push(node.right);
      }
    }
    return backs;
  }
  getMin() {
    const minNode = (node) => {
      return node ? (node.left ? minNode(node.left) : node) : null;
    }
    return minNode(this.root);
  }
  getMax() {
    const maxNode = (node) => {
      return node ? (node.right ? minNode(node.right) : node) : null;
    }
    return maxNode(this.root);
  }
  remove(value) {
    removeNode = (node, value) => {
      if (!node) return;
      if (node.value === value) {
        if (!node.left && !node.right) {
          node = null;
        }
        if (!node.right) node = node.left;
        if (!node.left) node = node.right;
        if (node.right && node.left) {
          let minNode = this.getMin(node.right);
          minNode.left = node.left;
          node = node.right;
        }
      } else if (value < node.value) {
        removeNode(node.left, value);
      } else {
        removeNode(node.right, value);
      }
    }
    removeNode(this.root, value);
  }
  find(value) {
    const findNode = (node, value) => {
      if (!node) {
        return null;
      }
      if (node.value === value) {
        return node;
      }
      return findNode((value < node.value) ? node.left : node.right, value);
    }
    return findNode(this.root, value);
  }
}