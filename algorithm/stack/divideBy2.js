function divideBy2(num) {
  var stack = new Stack(), rem, binaryString='';
  while(num > 0) {
    rem = num % 2;
    stack.push(rem);
    num = Math.floor(num/2);
  }
  while(!stack.isEmpty()){
    binaryString += stack.pop().toString();
  }
  return binaryString;
}

divideBy2(10);