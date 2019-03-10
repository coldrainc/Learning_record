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
var link = new Link_list();
function reverse(link) {
  let current = link.head;
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
reverse(link);