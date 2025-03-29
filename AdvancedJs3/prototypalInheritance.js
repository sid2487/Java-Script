// Inheritance being done in the prototypes is called prototypal inheritance.

function Person(name){
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

let siddharth = new Person("siddharth")
siddharth.greet()