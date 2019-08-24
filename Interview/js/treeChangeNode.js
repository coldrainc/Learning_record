
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function func(node) {
  function changeTree(node) {
    if (!node) return null;
  
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
  
    changeTree(node.left);
    changeTree(node.right);
  }
  changeTree(node);
  return node;
}
