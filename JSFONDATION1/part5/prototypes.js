// In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has an internal link to another object called its prototype.

let computer = { cpu: 12, ram: 8 };
let lenovo = {
    screen : "HD",
    __proto__: computer // lenovo wants to access all the properties of computer no matter how many properties are there.
};

let tomHardware = {}
// console.log(`lenovo`, lenovo.__proto__);

// Example:

let genricCar = {tyres: 4}

let tesla = {
    driver: "AI",
    // __proto__: genricCar // old way 
}

Object.setPrototypeOf(tesla, genricCar) // In the tesla i want to access all the properties of generic car

// console.log(`tesla`, tesla.__proto__);
// console.log(`tesla`, tesla.tyres);

console.log(`tesla`, Object.getPrototypeOf(tesla));





