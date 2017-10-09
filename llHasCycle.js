function hasCycle(head) {
  if (!head) {
    return false;
  }

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      return true;
    }
  }

  return false;
}
