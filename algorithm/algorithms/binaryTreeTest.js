// 先序优先遍历 深度优先
function midOrder(node) {
  let result = [];
  if(!node) {
    return;
  }
  result.push(node.value);
  midOrder(node.left, result);
  midOrder(node.right, result)
  // return result
}

// 多叉树就是所有的子节点都保存进去

// 广度优先遍历 层序遍历 队列实现
function levelOrder(node) { 
  if(!node) {
    return;
  }
  var que = [];
  que.push(node);
  while(que.length>0) {
    node = que.shift();
    console.log(node.value);
    if(node.left) que.push(node.left);
    if(node.right) que.push(node.right);
  }
}

// 深度优先遍历 先序遍历 栈实现
function deepPreOrder (node) {
  if (!node) return;
  let stack = [];
  var parentNode = node;
  while (parentNode || stack.length>0) {
    if (parentNode) {
      console.log(parentNode.value);
      stack.push(parentNode);
      parentNode = parentNode.left;
    } else {
      parentNode = stack.pop()
      parentNode = parentNode.rightNode
    }
  }
}

// 中序遍历
function deepMidOrder (node) {
  if (!node) return;
  let stack = [];
  let parentNode = node;
  while (parentNode || stack.length > 0) {
    if (parentNode) {
      stack.push(parentNode);
      parentNode = parentNode.left;
    } else {
      parentNode = stack.pop();
      console.log(parentNode.value);
      parentNode = parentNode.right;
    }
  }
}
