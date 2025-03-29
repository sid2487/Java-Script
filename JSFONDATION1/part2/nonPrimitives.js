// objects

// let username = {
//     firstname : "sid",
//     isLoggedin : true,
// };

// when we take username(which is an object) as a constant then it is fixed and can't be changed but the primitive one which is inside it like firstname and all can be changed.
const username = {
    "first name" : "Siddharth",
    isLoggedin : true,
}

// username.firstname = "Tamanna";
username["first name"] = "Tammana";
username.lastname = "Ghildiyal";

// console.log(username["first name"]);
// console.log(username.lastname);
// console.log(username);


// console.log(typeof username);

// console.log(typeof firstname); // In JavaScript, firstname is a property of the username object, not a standalone variable. Since you never declared firstname as an independent variable (let firstname or const firstname), it doesn't exist in the global scope.



let today = new Date();
// console.log(today.getDate());

// Arrays

let anotherUser = ["tamanna", true]

console.log(anotherUser[0]);

// implicit conversion in js is not the best

// let isValue = true;
// console.log(isValue + 1);  // it gives 2 as an output


let isValue = "2abc";
let isValue2 = "a"
let isValue3 = true;



console.log(Number(isValue));
console.log(typeof Number(isValue));

console.log(Number(isValue2));
console.log(Number(isValue3));

console.log(Number(null));
console.log(Number(undefined));






// console.log("1" + 1);
// console.log(1 + "1");







