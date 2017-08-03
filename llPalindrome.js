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

function isListPalindrome(ll) {
  
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

console.log(findMid(a).value == "b");
console.log(findMid(e).value == "b");
console.log(findMid(i).value == "b");
