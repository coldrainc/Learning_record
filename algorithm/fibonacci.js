var fibonacci = function(n) {
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2)
}

var result = fibonacci(2);

console.log(result)