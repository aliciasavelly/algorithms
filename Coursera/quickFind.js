class quickfind {
  constructor(arr) {
    this.elements = this.setUpObj(arr);
  }

  setUpObj(arr) {
    let elements = {};
    for (let i = 0; i < arr.length; i++) {
      elements[arr[i]] = i;
    }
    return elements;
  }

  union(num1, num2) {
    // look for entries ids == id first argument and set
    // those to the id of the second argument
    let id1 = this.elements[num1];
    let id2 = this.elements[num2];

    for (let key in this.elements) {
      if (this.elements[key] === id1) {
        this.elements[key] = id2;
      }
    }
  }

  connected(num1, num2) {
    console.log(this.elements[num1]);
    return this.elements[num1] === this.elements[num2];
  }
}

let q = new quickfind([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
q.union(4, 3);
q.union(3, 8);
q.union(6, 5);
q.union(9, 4);
q.union(2, 1);
console.log(q.connected(0, 7) == false);
console.log(q.connected(8, 9) == true);
q.union(5, 0);
q.union(7, 2);
q.union(6, 1);
q.union(1, 0);
console.log(q.connected(0, 7) == true);
