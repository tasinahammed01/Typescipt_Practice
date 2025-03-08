"use strict";
// Classes and Objects 
// *Class definition
// *Constructors
// *Access modifiers (Public, private, Protected)
// *Readinly properties
// *Optional Properties
// *Paremeter properties
// *Getters and setters
// *Static Members
// *Abstract classes and methods
// *Constructors
// ==================
class HumanMaker {
    constructor(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
    }
}
let newHumanMaker = new HumanMaker("Tasin", true);
// class Phone{
//     constructor(public name: string, public ram: number, public price: number ){
//     }
// }
// let phoneDetails = new Phone("Samsung", 4, 12000)
// This keyword
// ============
class Phone {
    constructor(name, ram, price) {
        this.name = name;
        this.ram = ram;
        this.price = price;
        this.ram = ram + 4;
    }
}
let phoneDetails = new Phone("Samsung", 4, 12000);
