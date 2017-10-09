function compareLinkedLists( headA, headB) {
  currentA = headA;
  currentB = headB;

  while (currentA && currentB) {
    if (currentA.data !== currentB.data) {
      return 0;
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }

  if (currentA !== currentB) {
    return 0;
  }

  return 1;
}
