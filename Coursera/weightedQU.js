class WeightedQU {
  constructor(arr) {
    this.elements = [];
    this.size = [];
    this.setupArr(arr);
  }

  setupArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.size[arr[i]] = 1;
      this.elements[arr[i]] = arr[i];
    }
  }

  findRoot(num) {
    while (num != this.elements[num]) {
      num = this.elements[num];
    }

    return num;
  }

  connected(num1, num2) {
    return this.findRoot(num1) == this.findRoot(num2);
  }

  union(num1, num2) {
    let root1 = this.findRoot(num1);
    let root2 = this.findRoot(num2);

    if (root1 == root2) {
      return;
    }

    if (this.size[root1] < this.size[root2]) {
      this.setUnion(root1, root2);
    } else {
      this.setUnion(root2, root1);
    }
  }

  setUnion(root1, root2) {
    this.elements[root1] = root2;
    this.size[root2] += this.size[root1];
  }
}

let q = new WeightedQU([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(q.elements);
console.log(q.size);
q.union(4, 3);
q.union(3, 8);
console.log(q.elements);
q.union(6, 5);
q.union(9, 4);
console.log(q.elements);
