function sum(arr) {
  let sum = 0;
  arr.forEach(item => {
      sum += item;
  })
  return sum;
}

console.log(sum([1, 2, 4, 5]))
