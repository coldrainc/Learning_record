// 非立即执行版本
// 只执行最后一次点击，因为必须在隔wait时间才算，如果在外头时间内点击，时间将会重新算
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }
}

// 立即执行