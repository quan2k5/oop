"use strict";
class Employees {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor() {
        console.log(this.name, this.company, this.phone);
    }
}
let employee1 = new Employees('le anh quan', 'google', 12345433456545);
employee1.printInfor();
