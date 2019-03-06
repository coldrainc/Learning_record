// 中序优先遍历 深度优先
function midOrder(node) {
  let result = [];
  if(!node) {
    return;
  }
  midOrder(node.left, result);
  result.push(node.value);
  midOrder(node.right, result)
  return result
}

// 多叉树就是所有的子节点都保存进去

// 广度优先遍历
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

// 深度优先遍历
function deepOrder (node) {
  if (!node) return;
  let stack = [];
  var parentNode = node;
  while (parentNode || stack.length>0) {
    if (parentNode) {
      console.log(parentNode.value);
      stack.push(parentNode);
      parentNode = parentNode.left;
    } else {
      parentNode = stack.pop();
      stack.push(parentNode.right);
    }

  }
}

