function randomString(n) {
  let str = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let result = '';
  for(let i = 0; i < n; i++) {
    result += str[Math.floor(Math.random()*36)];
  }
  return result;
}

console.log(randomString(10));