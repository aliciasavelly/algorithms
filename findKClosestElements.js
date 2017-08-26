var findClosestElements = function(arr, k, x) {
  let cache = new LRUCache(arr[0], k);

  for (let i = 1; i < arr.length; i++) {
    let end = cache.add(arr[i]);
    if (!end) {
      break;
    }
  }

  let result = [];
  let current = cache.root;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

class LRUCache {
  constructor(rootVal = null, k) {
    this.root = rootVal ? new Node(rootVal) : null;
    this.length = this.root ? 1 : 0;
    this.last = this.root;
    this.k = k;
    this.totalVal = this.root ? 0 : this.root.val;
  }

  add(val) {
    let currentNode = new Node(val);

    if (this.length === this.k) {
      if (this.totalVal - this.root.val + val < this.totalVal) {
        this.root = this.root.next;
        this.last.next = currentNode;
        this.last = currentNode;
      } else {
        return false;
      }
    } else {
      if (this.last) {
        this.last.next = currentNode;
        this.last = this.last.next;
        this.length++;
      } else {
        this.root = currentNode;
        this.last = currentNode;
        this.length = 1;
      }
    }

    return true;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
