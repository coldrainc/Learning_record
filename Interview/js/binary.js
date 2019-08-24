function binary(arr, value, low, height) {
  if (low > height) return -1;
  let mid = parseInt((low + height)/2);
  if (arr[mid] = value) {
    return mid;
  }
  if (arr[mid] > value) {
    binary(arr, vlaue, low, mid - 1);
  } else {
    binary(arr, value, mid + 1, height);
  }
}

function whileBinary(arr, value, low, height) {
  let mid;
  while (low < height) {
    mid = parseInt((low+height)/2);
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] > value) {
      height = mid - 1
    } else {
      low = mid + 1;
    }
  }
  return -1;
}