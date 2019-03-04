let max = 188;
let arr = [50, 42, 9, 15, 105, 63, 14, 30];

function question1(max, arr) {
  let result = 0;
  let sorted = arr.sort((a, b) => {
    return a-b;
  })
  for (let i in sorted) {
    if ((result+arr[i]) <= max) {
      result += arr[i]
    }
  }
  return result;
}
console.log(question1(max, arr));