function linkReverse(head) {
  let prev = null, next;
  prev = head;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return head;
}