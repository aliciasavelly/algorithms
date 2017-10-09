
function reversePrint(head) {
  if (!head) {
    return;
  }

  reversePrint(head.next);
  console.log(head.data);
}
