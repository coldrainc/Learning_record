function Link_list() {
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  let head = null;
  let length = 0, current;
  this.append = function(value) {
    var node = new Node(value);
    if (!head) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function(position, value) {
    var node = new Node(value);
    var index = 0;
    if (0 <= position < length) {
      if (position === 0) {
        node.next = head;
        head = node;
      } else {
        current = head;
        while (index++ < position) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
    }
    length++;
  }
  this.remove = function(value) {
    if (head.value === value) {
      head = head.next;
    } else {
      current = head;
      while (current) {
        if (current.next.value === value) {
          current.next = current.next.next;
        }
        current = current.next;
      }
    }
  }
  this.size = function() {
    return length;
  }
  this.getHead = function() {
    return head;
  }
}

function reverse(head) { // 翻转链表
  let current = head;
  let stack = [], value;
  let newNode = new Link_list();
  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  while (stack.length > 0) {
    value = stack.pop();
    newNode.append(value);
  }
  return newNode;
}
function findToTail(head, n) { // 查找倒数第几个数使用两个，一个先过去
  let current = head;
  let result = head;
  for (let i = 0; i < n; i++) {
    current = current.next;
  }
  while (current) {
    current = current.next;
    result = result.next
  }
  return result.value;
}
function findMid(head) { // 查找中间节点

}
var link = new Link_list();
link.append(1);
link.append(2);
link.append(3);
let head = link.getHead();

let reverseValue = reverse(head); 
let findTailValue = findToTail(head, 3);

console.log(reverseValue.getHead());
console.log(findTailValue);