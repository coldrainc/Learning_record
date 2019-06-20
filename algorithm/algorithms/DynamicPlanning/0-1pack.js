let vs = [ 2, 3, 5, 7, 9, 10];
let ws = [10, 8, 20, 6, 30, 1];
let n = 100;
function pack(values, weights, n) {
  let bagMatrix = [];
  for (let w = 0; w <= n; w++) {
    bagMatrix[w] = [];
    for (let j = 0; j < 6; j++) {
      if (w === 0) {
        bagMatrix[w][j] = 0;
        continue;
      }
      if (w < weights[j]) {
        bagMatrix[w][j] = bagMatrix[w][j-1] || 0;
        continue;
      }
      bagMatrix = Math.max((bagMatrix[w-weights[j]][j-1] || 0) + values[j], bagMatrix[w][j-1])
    }
  }
  return bagMatrix;
}

console.log(pack(vs, ws, n))