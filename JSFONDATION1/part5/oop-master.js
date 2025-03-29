let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    }
};
// console.log(car.start()); // problem is we can't create multiple copies of it



// so we went to the constructor
function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person("John", 20)
// console.log(john.name);



// Prototypal chain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

let dog = new Animal("dog")
// console.log(dog.speak());


Array.prototype.hitesh = function(){
    return `Custom method ${this}`
};

let myArray = [1,2,3,4]
// console.log(myArray.hitesh());

let myNewArray = [1,2,3,4,5,6]
// console.log(myNewArray.hitesh());


// classes -->> inside the class, the functions are called as Methods and the benefit of method is we don't need to use the keyword function here
class Vehicles {
    // putting up the constructor is an optional thing
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicles {
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicles("Toyota", "Corolla")
// console.log(vehOne.model);



// Encapsulation: I want to restrict the direct access to the object data  

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount();
// console.log(account.getBalance());


// Abstraction: It hides the complex implementation details

class CoffeeMachine {

    start() {
        // call DB
        // filter value
        return `Starting the machine....`
    }
    brewCoffee(){
        // complex calculation
        return `Brewing coffee`
    }

    pressStartButton(){
        let msgone = this.start()
        let msgtwo = this.brewCoffee()
        return `${msgone} + ${msgtwo}`
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());



// Polymorphism: The ability of something to have or to be displayed in more than one form or in simple words we can say that something which takes multiple forms.

class Bird {

    fly() {
        return `Flying....`
    }
    
} 

class Penguin extends Bird {
    fly(){
        return `Penguin can't fly` 
    }
} 

let bird = new Bird() 
let penguin = new Penguin() 
// console.log(bird.fly());
// console.log(penguin.fly());

// Static method: Static are the special method that can only be called by the class itself.
class Calculator {
    static add(a, b){
        return a+b;
    }
}

// let miniCalc = new Calculator(); 
// console.log(miniCalc.add(2,3)); // it will throw an error because of static function

// console.log(Calculator.add(2,3)); // This is how we access the static function



// Getters and Setters

class Employee {

    #salary;


    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be in negative");  
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to see salary`;
        // return this._salary
    }

    set salary(value){
        if(value < 0){
            console.error("Inavalid Salary")
        } else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", 500);
console.log(emp._salary);















