class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

class Square extends Rectangle {
  constructor(w) {
    super(w);
    this.h = w;
  }
}

let s = new Square(7);
console.log(s.w);
console.log(s.h);
console.log(s.area());
