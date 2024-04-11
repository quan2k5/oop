"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    showRectangle() {
        console.log(this.width, this.height);
        console.log('Chu vi:', (this.width + this.height) * 2);
        console.log('Dien tich:', this.width * this.height);
    }
    set updateWidth(width) {
        this.width = width;
    }
    set updateHeight(height) {
        this.height = height;
    }
}
const rectangle1 = new Rectangle(5, 10);
rectangle1.showRectangle();
rectangle1.updateWidth = 10;
rectangle1.updateHeight = 20;
rectangle1.showRectangle();
