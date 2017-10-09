function getNodeValue( head, position) {
  let frontPos = lenLL(head) - position - 1;
  let current = head;

  for (let i = 0; i < frontPos; i++) {
    current = current.next;
  }

  return current.data;
}

function lenLL(head) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}
