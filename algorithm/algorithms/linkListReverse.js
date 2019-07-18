// 链表翻转

function linkListReverse(head) {
  let prev = null, next;

  while(head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}