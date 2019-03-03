function randomNum(max, min) {
  // random 取值为 0 <= random < 1
  return Math.floor(Math.random()*(max-min+1))  + min;
}

console.log(randomNum(10, 1));