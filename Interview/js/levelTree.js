function level(tree) { // 利用队列的先进先出
  let queue = [];
  queue.push(tree);
  while (queue.length > 0) {
    let node = queue.shift(); // 先进先出 shift弹出第一个
    console.log(node.value);
    if (node.left) {
      queue.push(node.left);
    } 
    if (node.right) {
      queue.push(node.right);
    }
  }
}