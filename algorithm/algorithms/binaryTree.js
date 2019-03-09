function BinaryTree() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;
  this.insert = function(key){
    var node = new Node(key);
    if (!root){
      root = node
    } else {
      insertNode(root, node);
    }
  }
  var insertNode = function(node, newNode) {
    // console.log(this)// 全局
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
}

var test = new BinaryTree();
test.insert(10)