function Node(value) {
  this.value = value;
  this.next = null;
}

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

function sumNum(l1, l2) { // 两数之和
  let carry = 0;
  let dummy = new Node();
  let cur = dummy;

  while (l1 || l2 || carry) {
    const s = (l1.value || 0) + (l2.value || 0) + carry;
    carry = parseInt(s / 10, 10);
    cur.value = s % 10;
    cur.next = new Node();
    cur = cur.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy;
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
  let fast = head, slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value
}
var link = new Link_list();
link.append(1);
link.append(2);
link.append(3);
let head = link.getHead();

let reverseValue = reverse(head); 
let findTailValue = findToTail(head, 3);
let findMidValue = findMid(head);
console.log(reverseValue.getHead());
console.log(findTailValue);
console.log(findMidValue);