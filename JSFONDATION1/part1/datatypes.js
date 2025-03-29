/*
datatypes: (8 datatypes are there in js )
String
Numeber
Boolean
Bigint

Undefined : not a defined value now but it might contain some value
null : empty(not 0 bcoz 0 is not null)

Object

Symbol
*/

// varriables



let score = 102;
let name = "chaicode.com"
let isLoggedin = false
console.log(score)

// objects
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]
let user = {firstname: "siddharth", lastname: "mishra"}

console.log(teaTypes);

let getScore = score; // you can borrow this
console.log(getScore);


// ** Important Concept:
/* 
1. Arithmetic Operators (+, -, *, /, etc.)
If an operator is purely mathematical (-, *, /, etc.), JavaScript tries to convert both operands to numbers.

If conversion fails, the result is NaN. 
*/

console.log('5' - 2);     // 3  ('5' is converted to 5)
console.log('5' * '2');   // 10 (both are converted to numbers)
console.log('a' - 1);     // NaN ('a' cannot be converted to a number)
console.log('5' - 'x');   // NaN ('x' is not a number)


/*
2. Concatenation with + Operator
If either operand is a string, + converts the other operand to a string and performs string concatenation.

If both operands are numbers, + performs addition.
*/

console.log('sid' + '1');  // 'sid1' (Both are strings, so concatenation happens)
console.log(10 + '1');     // '101' (10 is converted to '10', then concatenated)
console.log(10 + 1);       // 11 (Both are numbers, so addition happens)

/*
3. Subtraction (-), Multiplication (*), and Division (/)
JavaScript tries to convert both operands to numbers before applying these operators.

If conversion fails, the result is NaN.
*/

console.log('10' - '2');  // 8 (Both are converted to numbers)
console.log('10' * '2');  // 20
console.log('10' / '2');  // 5
console.log('sid' - '1'); // NaN (Cannot convert 'sid' to a number)

/*
4. Mixing Numbers and Strings in Other Cases
Any operation that expects a number but receives a string tries to convert the string to a number.

If the string contains non-numeric characters, the result is NaN.
*/

console.log(Number('5'));  // 5
console.log(Number('sid')); // NaN
console.log('5' - 0);      // 5 ('5' is converted to 5)
console.log('5px' - 0);    // NaN ('5px' cannot be converted to a number)


