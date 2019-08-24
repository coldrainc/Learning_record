function Stack() {
  let item = [];
  this.push = function(value) {
    item.push(value);
  }
  this.pop = function() {
    return item.pop();
  }
  this.isEmpty = function() {
    return item.length === 0;
  }
}

let stack1 = new Stack();
let stack2 = new Stack();

function push(node)
{
    stack1.push(node);
}
function pop()
{
  if (stack1.isEmpty() && stack2.isEmpty()) {
    throw new Error('Queue is empty!');
  }
  console.log(stack1)
  if (stack2.isEmpty()) {
    while (stack1.isEmpty()) {
      let value = stack1.pop();
      stack2.push(value);
    }
  }
  console.log(stack1)
  console.log(stack2)
  return stack2.pop();
}

push(1)
push(2)
push(3)
pop()
