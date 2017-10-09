function insert(head, data, position) {
  let newNode = new Node(data);

  if (!head) {
    return newNode;
  }

  if (position === 0) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }

  let next = current.next;
  current.next = newNode;
  newNode.next = next;

  return head;
}
