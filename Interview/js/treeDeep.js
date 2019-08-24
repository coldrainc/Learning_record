function deepTree(tree) {
  if (!tree) {
    return 0
  }
  let left = deepTree(tree.left);
  let right = deepTree(tree.right);
  return left >= right ? left+1 : right+1;
}