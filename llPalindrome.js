// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

class ListNode {
  constructor(n) {
    this.value = n;
    this.next = null;
  }
}

a = new ListNode("a");
b = new ListNode("b");
c = new ListNode("b");
d = new ListNode("a");
a.next = b;
b.next = c;
c.next = d;

e = new ListNode("a");
f = new ListNode("b");
g = new ListNode("c");
h = new ListNode("a");
e.next = f;
f.next = g;
g.next = h;

i = new ListNode("a");
j = new ListNode("b");
k = new ListNode("a");
i.next = j;
j.next = k;

l = new ListNode("a");
m = new ListNode("b");
n = new ListNode("c");
l.next = m;
m.next = n;

function isListPalindrome(ll) {
  let mid = findMid(ll);

  let firstHead = ll;
  let secondHead = reverseLL(mid.next);

  while (secondHead) {
    if (secondHead.value != firstHead.value) {
      return false;
    }

    firstHead = firstHead.next;
    secondHead = secondHead.next;
  }

  return true;
}

function findMid(ll) {
  let slow = ll;
  let fast = ll;

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function reverseLL(ll) {
  let prev = null;
  let current = ll;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// console.log(findMid(a).value == "b");
// console.log(findMid(e).value == "b");
// console.log(findMid(i).value == "b");
console.log(isListPalindrome(a) == true);
console.log(isListPalindrome(e) == false);
console.log(isListPalindrome(i) == true);
console.log(isListPalindrome(l) == false);
