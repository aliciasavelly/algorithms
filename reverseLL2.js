function reverseLinkedList(head) {
  let currentNode = head;
  let prevNode;
  let nextNode;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}
