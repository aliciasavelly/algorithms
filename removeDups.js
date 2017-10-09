function removeDuplicates(head) {
  let values = new Set();
  let current = head;
  let prev;

  while (current) {
    if (values.has(current.data)) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    values.add(current.data);
    current = current.next;
  }

  return head;
}
