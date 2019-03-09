let num = 123456
// 数字千分位化
// num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',');
// 没有小数的实现
let miliFormat = (number) => {
  return number && number.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',');
}

// 带有小数的实现
let miliFormat1 = (num) => {
  return num && num.toString().replace(/^\d+/g, (m) => {
    return m.replace(/(?=(?!^)(\d{3})+$)/g, ',');
  });
}

let miliFormat2 = (num) => {
  let str = num.toString(), count = 1;
  let newStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    if (count % 3 === 0 && i !== 0) {
      newStr += str[i] + ',';
    } else {
      newStr += str[i];
    }
    count++;
  }
  return newStr.split('').reverse().join('');
}

console.log(miliFormat(num));
console.log(miliFormat2(num));
console.log(0 && 2);