function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
  var root = null
  // 插入节点
  var insertNode = function(node, newNode) {
    if(newNode.key < node.key){
      if(node.left === null) {
        node.left = newNode
      }else {
        insertNode(node.left, newNode)
      }
    }else {
      if(node.right === null) {
        node.right = newNode;
      }else {
        insertNode(node.right, newNode)
      }
    }
  }
  this.insert = function(key) {
    var newNode = new Node(key);
    if(root === null) {
      root = newNode
    }else {
      insertNode(node, newNode);
    }
  }
  // 中序遍历 
  var inOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key);
      inOrderTraverseNode(node.right, callback)
    }
  }
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }
  // 先序遍历
  var preOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }
  this.preOrderTraverse = function(callback) {
    if(node !== null) {
      preOrderTraverseNode(root, callback)
    }
  }
  // 后序遍历
  var postOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key);
    }
  }
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }
  // 查找最大值
  var maxNode = function(node) {
    if(node) {
      while(node && node.right !== null){
        node = node.right
      }
      return node.key
    }
    return null;
  }
  this.max = function() {
    return maxNode(root);
  }
  // 查找最小值
  var minNode = function(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key;
    }
    return null
  }
  this.min = function() {
    return minNode(root)
  }
  // 查找任意值
  var searchNode = function(node, key) {
    if(node === null) {
      return false
    }
    if(key < node.key) {
      searchNode(node.left, key)
    }else if(key > node.key) {
      searchNode(node.right, key)
    }else {
      return true;
    }
  }
  this.search = function(key) {
    searchNode(root, key);
  }
  // 删除节点
  var deleteNode = function(node, key) {
    if(node === null) {
      return null;
    }
    if(key < node.key) {
      node.left = deleteNode(node.left, key)
    }else if(key > node.key) {
      node.right = deleteNode(node.right, key)
    }else {
      if(node.left === null && node.right === null) {
        node = null
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node
      }else if(node.right === null) {
        node = node.left;
        return node;
      }
      var replace = minNodeSelf(node.right)
      node.key = replace.key;
      node.right = deleteNode(replace.key)
      return node;
    }
  }
  this.remove = function(key) {
    root = deleteNode(root, key)
  }
  // 辅助removeNode 这里的是在任意的节点里面查找最小值
  var minNodeSelf = function(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null
  }
  this.findMinNode = function() {
    return minNodeSelf(node);
  }
}

