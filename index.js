class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  let pi = Math.PI();

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return pi * this.diameter;
  }

  get area() {
    return pi * (this.radius ** 2);
  }
}
