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

function reverseLL(ll) {
  let prev = null;
  let current = ll;
  let next;

  while (current) {
    // next = current.next;
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;

  }
  return prev;
}

let rA = reverseLL(a);
let rE = reverseLL(e);
let rI = reverseLL(i);
let rL = reverseLL(l);
console.log(rA.value);
console.log(rA.next.value);
console.log(rA.next.next.value);
console.log(rA.next.next.next.value);
console.log(rE.value);
console.log(rE.next.value);
console.log(rE.next.next.value);
console.log(rE.next.next.next.value);
console.log(rI.value);
console.log(rI.next.value);
console.log(rI.next.next.value);
console.log(rL.value);
console.log(rL.next.value);
console.log(rL.next.next.value);
