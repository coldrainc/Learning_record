function triangle (num) {
  let arr = [];
  for (i = 0; i < num; i++) {
    arr[i] = new Array(i);
  }
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i+1; j++) {
      if (i === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = (arr[i-1][j-1] || 0) + (arr[i-1][j] || 0);
      }
    }
  }
  return arr;
}

console.log(triangle(10));

// 两数之和
function sumNum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }

    map.set(nums[i], i);
  }
}

function sumNum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
