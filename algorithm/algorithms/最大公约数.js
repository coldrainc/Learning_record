function euclideanAlgorithm(A, B) {
  const a = Math.abs(A);
  const b = Math.abs(B);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
} 