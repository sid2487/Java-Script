/*
Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
*/

function stringToNumber(str){
    if(str === null || str === undefined || str.trim() === "") return "Not a number"
    // if (str.trim() === "") return "Not a number";
    let num = Number(str)
    if(isNaN(num)) return "Not a number"
    return num;
    // return isNaN(num) ? "Not a number" : num;
    
}
// console.log(stringToNumber("5"))



/*
Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
*/

function flipBoolean(value){
    return !Boolean(value)
}
// console.log(flipBoolean(undefined));

/*
Outputs:
console.log(flipBoolean(true));      // false
console.log(flipBoolean(false));     // true
console.log(flipBoolean(0));         // true
console.log(flipBoolean(1));         // false
console.log(flipBoolean("hello"));   // false
console.log(flipBoolean(""));        // true
console.log(flipBoolean(null));      // true
console.log(flipBoolean(undefined)); // true
console.log(flipBoolean([]));        // false
console.log(flipBoolean({}));        // false
console.log(flipBoolean(NaN));       // true

*/



/*
Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
*/

function whatAmI(input){
    if(typeof input === "number") return "It's a number"
    if(typeof input === "string") return "It's a string"
    return "It's something else"
}
// console.log(whatAmI(NaN));



/*
Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(value) {
    // return value ? "It's truthy!" : "It's falsey!";
    if(value){
        return "It's truthy!"
    } else {
        return "It's falsey!"
    }
}
console.log(isItTruthy());

/*
Outputs:
console.log(isItTruthy(true));      // "It's truthy!"
console.log(isItTruthy(false));     // "It's falsey!"
console.log(isItTruthy(1));         // "It's truthy!"
console.log(isItTruthy(0));         // "It's falsey!"
console.log(isItTruthy("hello"));   // "It's truthy!"
console.log(isItTruthy(""));        // "It's falsey!"
console.log(isItTruthy(null));      // "It's falsey!"
console.log(isItTruthy(undefined)); // "It's falsey!"
console.log(isItTruthy([]));        // "It's truthy!"
console.log(isItTruthy({}));        // "It's truthy!"
console.log(isItTruthy(NaN));       // "It's falsey!"

*/




