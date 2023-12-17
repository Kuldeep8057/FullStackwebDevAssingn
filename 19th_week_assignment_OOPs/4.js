class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return Math.PI * 2 * this.radius
    }
}

class Rectangle {
    constructor(length, breath) {
        this.length = length;
        this.breath = breath;
    }

    calculateArea() {
        return this.length * this.breath;
    }
    calculatePerimeter() {
        return 2 * (this.length + this.breath)
    }
}

class Triangle {
    constructor(side1, side2, side3, height1, height2) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.height1 = height1;
        this.height2 = height2;
    }

    calculateArea() {
        return 0.5 * (this.side1 * this.height1 + this.side2 * this.height2);
    }

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);