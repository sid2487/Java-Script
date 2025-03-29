// How to access array in js: 
// we can use forEach, forof or for loop for this.

let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"

// Looping through an array
fruits.forEach(fruit => console.log(fruit)); 
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Name: ${fruit}`);
    
})




// How to access objects in js: for in loop is best to access objects in js

let person = {
    name: "john",
    age: "25",
    "city": "New York"
};

console.log(person.name); // "john"
console.log(person["age"]); // 25
// console.log(person[city]); gives error

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}





// How to access object inside array in js: 
// best loop for this is:
// forEach() -> when iterating without returning a new array(just iterates, does not return anything)
// map() -> when transforming data(transform data and returns a new array)
// forof() -> when just reading data.(only iterates over values, doen't return anything)

let users = [
    {name: "Sid", age: 25},
    {name: "Tamanna", age: 22},
    {name: "Shruti", age: 24},
    {name: "Apoorva", age: 23},

];

// accessing a specific object
console.log(users[1].name);

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
    
})

// for of
for (let user of users){
    console.log(`${user.name} is ${user.age} years old.`); // just reading and displaying the data.
    
}

// map
let userNames = users.map(user => user.name); // transforming data into array: ["Sid", "Tamanna", "Apoorva"]





// If you want a single value use .reduce -> for sum, average, min, max
let numbers = [1,2,3,4];
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10



