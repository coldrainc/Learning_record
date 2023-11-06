function CirLinkList() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  var length = 0;
  var head = null, tail = null;
  this.append = function(element) {
    var node = new Node(element), current;
    if (!head) {
      head = node;
      head.next = head;
      tail = head;
    } else {
      current = head;
      while (current.next !== head) {
        current = current.next;
      }
      current.next = node;
      tail = node;
      node.next = head;
    }
    length++;
    return true;
  }
  this.insert = function(position,element) {
    var node = new Node(element), current;
    if (position > -1 && position < length) {
      var index = 0,
      current = head;
      if (position === 0) {
        node.next = head;
        tail.next = node;
        head = node;
      } else {
        while (index++ < position) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
      length++;
      return true
    } else {
      return false;
    }
  }
  this.remove = function(element) {
    if (element === head.element) {
      if (length === 1) {
        head = null;
      } else {
        tail.next = head.next;
        head = tail.next;
      }
      length--;
      return true;
    } else {
      current = head;
      while (current.next !== head) {
        if (current.next.element === element) {
          current.next = current.next.next;
          if (current.next === head) tail = current;
          length--;
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
  this.getHead = function() {
    return head;
  }
  this.size = function() {
    return length;
  }
  this.indexOf = function(element) {
    var index = 0, current = head;
    while (current) {
      if (current.element === element) {
        return index;
      }     
      index++;
      current = current.next;
    }
    return -1;
  }
  this.isEmpty = function() {
    return head ? false : true;
  }
}

let cirLink = new CirLinkList();
let i = 1;
cirLink.append(1);
cirLink.append(2);
cirLink.insert(0, 3);
cirLink.remove(3);
cirLink.insert(0, 0);
cirLink.append(3)
let current = cirLink.getHead();
while (current) {
  console.log(current.element);
  if (i === 6) break;
  i++;
  current = current.next;
}


