class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(root = null) {
    this.root = root;
  }

  isCycle() {
    let includedNodes = new Set;
    let current = this.root;
    while (current != null) {
      if (includedNodes.has(current)) return true;
      includedNodes.add(current);
      current = current.next;
    }

    return false;
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

let ll = new LinkedList(n1);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;
console.log(ll.isCycle());
