function ValidPar(str) {
  const maps = {
    '(': 1,
    ')': -1,
    '{': 2,
    '}': -2,
    '[': 3,
    ']': -3
  }
  let stack = [];
  for (item of maps) {
    if (maps[item] > 0) {
      stack.push(item);
    } else {
      let pop = stack.pop();
      if(maps[pop] + maps[item] !== 0) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
}