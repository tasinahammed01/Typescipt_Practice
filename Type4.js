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
// Public & Private Access MOdifier
// =======================================
class bottleMaker {
    constructor(name) {
        this.name = name;
        this.halua = "halua";
    }
}
class MetaBottleMaker extends bottleMaker {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.halua); //here if you make the public to private we cann't access the private value outside off the class 
    }
}
let b1 = new bottleMaker("tasinBottles");
// ReadOnly
// ===============
class User {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "Helloow"; //Cannot assign to 'name' because it is a read-only property.
    }
}
let ul = new User("Tasin");
// *Getters and setters
// ============================
class User2 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name1() {
        return this._name;
    }
    set name1(value) {
        this._name = value;
    }
}
let value = new User2("tasin", 18);
