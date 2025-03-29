let balance = 120;
let anotherBalance = new Number(120);



console.log(typeof balance);
console.log(typeof anotherBalance); // it gives an object that means every primitve data types can be converted into adavanced(primitive) data types.



// null and undefined 

// let firstname; // it gives undefined
let firstname = null; // null means empty
let lastname = undefined; // undefined means it might comes in the future but its not 0 for sure.

console.log(firstname); 
console.log(lastname); 


// strings

let myString = "hello";
let myStringOne = "Hola";
let username = "sid";

let oldGreet = myString + " " + "sid";
console.log(oldGreet);

let greetMessage = `Hello ${username}`; // string interpolation
let demoOne = `Value is ${2*2}`; // here we can do the computation also
console.log(greetMessage);

// symbols: it gurantees the uniqueness -->> the whole point of symbol is to generate unique value internally. 
// let sm1 = Symbol()
let sm1 = Symbol("sid")
let sm2 = Symbol()

console.log(sm1 == sm2);
console.log(sm1);
console.log(typeof sm2);




