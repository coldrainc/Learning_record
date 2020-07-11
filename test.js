// 使用JS实现一个repeat方法，
// function repeat (func, times, wait) { /* your code */ }  
// const repeatFunc = repeat(alert, 4, 3000)
// 调用这个 repeatedFunc(,,,,)，会alert 4次 hello world, 每次间隔3秒

// function repeat(func, times, wait) {
//   return function() {
//     let sum = 0;
//     let setinterval = setInterval(() => {
//       func(...arguments);
//       sum++;
//       if (sum === times) {
//         clearInterval(setinterval);
//       }
//     }, wait)
//   }
// }
// 给定一个无序整形数组，请设计一个算法找出其中连续出现的数字区间。
var list = [7,2,11,2,0,1,2,4,5,10,13,14,15];
// function summaryRanges(list) {
//    // 补全代码
// }
// var result = summaryRanges(list);
// console.log(result); // ["0->2", "4->5", "7", "10->11", "13->15"]

// function summaryRanges(list) {
//   let arr = [...new Set(list)];
//   arr = arr.sort((a, b) => {
//     return a - b;
//   })
//   let result = [], tmp = [arr[0]];
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i]+1 === arr[i+1]) {
//       tmp.push(arr[i+1]);
//     } else {
//       result.push(tmp);
//       tmp = [arr[i+1]];
//     }
//   }
//   for(let i = 0; i < result.length; i++) {
//     result[i] = `${result[i][0]}->${result[i][result[i].length-1]}`;
//   }
//   return result;
// }
// console.log(summaryRanges([7,2,11,2,0,1,2,4,5,10,13,14,15]))

// function validate(rules, value) {
//   let result = [];
//   for(let item of rules) {
//       if (typeof item.rule === 'function') {
//           result.push(new Promise((resolve, reject) => {
//             resolve(item.rule(value));
//           }))
//       } else {
//           result.push(new Promise((resolve, reject) => {
//             resolve(item.rule.test(value));
//           }))
//       }
//   }
  
// }

// function test(arr) {
//   let result = 0;
//   for(let i = 0 ;i < arr.length; i++) {
//     let sum = 0;
//     for(let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum > result) {
//         result = sum;
//       }
//     }
//   }
//   return result;
// }
// const dupArr =[3,1,2, '1',1,4,3,'1']
// => [3,1,2, '1' ,4]

// let obj = {
//   a: {
//       b: [1,2,3],
//       c: "i am foobar"
//   }
// }

// function deepCopy(obj) {
//   let tmp = Array.isArray(obj) ? [] : {};
//   for (let i in obj) {
//       if (obj.hasOwnProperty(i)) { // 这里 i就是key就是属性
//           tmp[i] = typeof obj[i]  === 'object' ? deepCopy(obj[i]) : obj[i];
//       }
//   }
//   return tmp;
// }
// console.log(JSON.stringify(deepCopy(obj)));

console.log(a);
var a = 1;

function test() {
  console.log()
}