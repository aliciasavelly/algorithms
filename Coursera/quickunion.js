class Quickunion {
  constructor(arr) {
    this.elements = this.setupArr(arr);
  }

  setupArr(arr) {
    let els = [];
    for (let i = 0; i < arr.length; i++) {
      els[arr[i]] = arr[i];
    }

    return els;
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
    this.elements[this.findRoot(num1)] = this.findRoot(num2);
  }
}

let q = new Quickunion([0, 1, 2, 3, 4, 5, 6, 7]);
console.log(q.elements);
q.union(1, 2);
q.union(0, 1);
console.log(q.connected(0, 2));
console.log(q.connected(0, 1));
console.log(q.connected(0, 8));
console.log(q.findRoot(0));
console.log(q.findRoot(1));
console.log(q.findRoot(2));
console.log(q.findRoot(3));
q.union(3, 4);
q.union(5, 6);
console.log(q.findRoot(3));
console.log(q.findRoot(4));
console.log(q.findRoot(5));
console.log(q.findRoot(6));
q.union(3, 6);
console.log(q.findRoot(3));
console.log(q.findRoot(4));
console.log(q.findRoot(5));
console.log(q.findRoot(6));
