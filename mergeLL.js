function mergeLinkedLists( headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let newLL;
  let newLLhead;

  if (currentA && currentB) {

    if (currentA.data < currentB.data) {
      newLL = new Node(currentA.data);
      currentA = currentA.next;
    } else {
      newLL = new Node(currentB.data);
      currentB = currentB.next;
    }
    newLLhead = newLL;
  } else if (currentA) {
    return currentA;
  } else {
    return currentB;
  }

  while (currentA && currentB) {
    if (currentA.data < currentB.data) {
      newLL.next = new Node(currentA.data);
      currentA = currentA.next;
    } else {
      newLL.next = new Node(currentB.data);
      currentB = currentB.next;
    }
    newLL = newLL.next;
  }

  newLL.next = currentA ? currentA : currentB;
  return newLLhead;
}
