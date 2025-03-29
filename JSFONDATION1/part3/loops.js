/*
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'. 
*/

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//     sum = sum + i;
//     i++;
// }
// console.log(sum);




/*
2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/

let countdown = []
let j = 5;
while (j > 0){
    countdown.push(j);
    j--;
}

// console.log(countdown);



/*
3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop".
Store each tea type in an array named 'teaCollection'.
*/

// let teaCollection = []
// let tea
// do {
//     tea = prompt(`Enter your favorite tea (type "stop" to finish)`)

//     if(tea !== "stop") {
//         teaCollection.push(tea)
//     }

// } while (tea != "stop");

// let count = 1;

// do {
//     console.log("This is loop number " + count);
//     count++;
// } while (count < 3);



/*
4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/

let total = 0;
let i = 1;

do {
    total += i
    i++;
} while (i <= 3);

console.log(total);

/*
5. Write a 'for' loop that multiplies each elements in the array '[2,4,6]' by 2 and stores the result in a new array named 'multipliedNumebers'.
*/

let multipliedNumebers = []
let numbers = [2,4,6,8]

for(let l=0; l < numbers.length; l++){
    // takeNumeber = numbers[l] * 2
    // multipliedNumebers.push(takeNumeber)

    multipliedNumebers.push(numbers[l] * 2)
}

console.log(multipliedNumebers);



/*
6. Write a 'for' loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList'.
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []

for(let c=0; c < cities.length; c++){
    cityList.push(cities[c]);
}

console.log(cityList);







