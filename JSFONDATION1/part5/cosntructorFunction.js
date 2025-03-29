// creating a constructor function

function Person(name, age){
    this.name = name
    this.age = age // rhs age and name comes from the parameter and lhs ones is our variable which we've created.
}

function Car(make, model){
    this.make = make // 'this' keyword is pointing to the newly created object 
    this.model = model
}

let myCar = new Car("Toyoto", "Camry") // if u don't use new then it will throw undefined as an output.
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
// console.log(myNewCar);



function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}` 
    }
}

let lemonTea = new Tea("lemon tea")
// console.log(lemonTea.describe());



function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
// console.log(dog.sound());

let cat = new Animal("Cat")
// console.log(cat.sound());



function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name
}

let tea = new Drink("tea")
let coffee =  Drink("coffee")

