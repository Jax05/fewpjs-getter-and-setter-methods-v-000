class Circle {
  constructor(radius) {
    this.radius = radius;
  }

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
