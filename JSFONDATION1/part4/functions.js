/*
1. Write a functions named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like "Making green tea" when called with "green tea".
Store the result in a variable named 'teaOrder'.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let greet = makeTea("black tea")
// console.log(greet);



/*
2. Create a function named 'order Tea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai".
Call 'confirmOrder' from within 'orderTea' and return the result.
*/

function orderTea(teaType){

    function confirmOrder(){
        return `Order Confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea();
// console.log(orderConfirmation);



/*
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable named 'totalCost'.
*/

/* 
** Ways to create a function

function greet () {} // regular function
const greet = () => {} // arrow function
() => {} // unnamed function

 */

// Important points for the arrow function
// 1. u can also remove this curly braces but in that case u have to bring the return statement in the same line as the arrow function and also remove the return keyword.
const calculateTotal = (price, quantity) =>  price * quantity
let totalCost = calculateTotal(499, 2);
// console.log(totalCost);



/*
4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument "early grey".
Return the result of calling 'makeTea'.
*/

// Anything that takes function as a parameter or returns a funciton back is called higher order function.
function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea)
// console.log(order);



/*
5. Write a function named 'createTeaMaker' that returns another funciton. The returned function should take one parameter, 'teaType', and return a message like "Making green tea".
Store the returned function in a variable named 'teaMaker' and call it with "green tea".
*/

function createTeaMaker(name){
    let score  = 100 // just to proove that inner function can access this as well.
    return function (teaType){
        return `Making ${teaType} for ${name} with ${score}`;
    }
}

let teaMaker = createTeaMaker("sid"); // createTeaMaker() is called. Since it returns a function, teaMaker now holds that function and it behaves like a function.

console.log(teaMaker("green tea"));

// Extra Gyaan
/* 

Boolean(value) converts any input into its boolean equivalent:
Truthy values (e.g., 1, "hello", [], {}) → true
Falsy values (e.g., 0, "", null, undefined, false) → false
! (logical NOT) flips the boolean value.

*/




