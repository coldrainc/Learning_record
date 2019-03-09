var My_list = [1, 3, 5, 7, 9];
var length = My_list.length;

function binary_search1 (list, item, low, high) {
  if (low > high) {
    console.log('你需要查找的数字不在数组中');
    return;
  }
  let mid = parseInt((low + high) / 2); // 这个地方要注意， js中除的结果会有小数
  if (list[mid] == item) {
    console.log(`该数字在数组中的位置为${mid}`);
    return;
  }
  if (list[mid] > item) {
    binary_search1(list, item, low, mid-1);
  }else {
    binary_search1(list, item, mid+1, high);
  }
}

function binary_search(list, item, low, high) {
  while( low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = list[mid];
    if(guess == item) {
      console.log(`查找的数字在数组中的位置为${mid}`);
      return;
    }
    if(guess > item) {
      high = mid - 1;
    }else {
      low = mid + 1;
    }
  }
  console.log('您要查找的数据不存在')
  return;
}

console.log(3/2);

binary_search1(My_list, 3, 0, length-1);
