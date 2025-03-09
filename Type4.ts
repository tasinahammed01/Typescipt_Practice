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
    constructor(public name: string, public isHandsome: boolean){

    }
}

let newHumanMaker  = new HumanMaker("Tasin", true);



// class Phone{
//     constructor(public name: string, public ram: number, public price: number ){

//     }
// }

// let phoneDetails = new Phone("Samsung", 4, 12000)



// This keyword
// ============



class Phone {
    constructor(public name: string, public ram: number, public price: number ){
        
        this.ram = ram + 4;
        
    }
}

let phoneDetails = new Phone("Samsung", 4, 12000)







// Public & Private Access MOdifier
// =======================================

class bottleMaker {
    private halua: string = "halua";
    constructor(public name: string){

    }
}

class MetaBottleMaker extends bottleMaker {
    constructor(name: string) {
        super(name);

    }

    getValue(){
        console.log(this.name, this.halua); //here if you make the public to private we cann't access the private value outside off the class 
    }
}

let b1 = new bottleMaker("tasinBottles")



// ReadOnly
// ===============


class User {
    constructor(public readonly name: string){
 
    }
    changeName(){
        this.name = "Helloow" //Cannot assign to 'name' because it is a read-only property.
    }
}

let ul = new User("Tasin")






// *Getters and setters
// ============================



class User2{
    constructor(public _name: string , public age: number){

    }

    get name1(){
        return this._name;
    }

    set name1(value: string){
         this._name = value;

    }
}

let value = new User2("tasin", 18)


