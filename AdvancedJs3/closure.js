// A closure in JavaScript is a function that remembers the variables from its outer scope, even after the outer function has finished executing.

function outer(){
    let counter = 4;
    return function(){
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());
