/*
1. Write a 'for' loop that loops through array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".
Stores all teas before "chai" in a new array named 'selectedTeas'.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []

for (let i=0; i < teas.length; i++){
    if(teas[i] === 'chai'){
        break; // it will break the loop as soon as it hits this condition.
    }
    selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);




/*
2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
Store the other cities in a new array named 'visitedCities'.
*/

let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []

for (let i =0; i < cities.length; i++){
    if(cities[i] === 'Paris') {
        continue;
    }

    visitedCities.push(cities[i]);
}
// console.log(visitedCities);



/*
3. Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found.
Store the numbers before '4' in an array named 'smallNumbers'.
*/


let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const num of numbers) {
    if(num === 4){
        break;
    }

    smallNumbers.push(num);
}
// console.log(smallNumbers);

/*
4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
Store the other teas in an array 'preferedTeas'.
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferedTeas = [];

for (const tea of teaTypes) {
    if(tea === 'herbal tea'){
        continue;
    }

    preferedTeas.push(tea);
}

// console.log(preferedTeas);



/*
5. Use a for-in loop to loop through an object containing city populations.
Stop the loop when the populations of "Berlin" is found and store all privious cities population in a new object named 'cityPopulations'.

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/
// ** For object for-in loops works the best

let citiesPopulation = {
    London: 8900000,
    "New York": 8400000,
    Berlin: 3500000,
    Paris: 2200000,
};

let cityNewPopulations = {};
for (const city in citiesPopulation) {
        // console.log(citiesPopulation[city]); // this is how we access values of the object

        if(city == "Berlin"){
            break;
        }

        // key = value ---->>>> This is how we create key value pair bcoz we can't use push in the object
        cityNewPopulations[city] = citiesPopulation[city];
        
    }
    // console.log(cityNewPopulations);
    



// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));


// console.log(typeof Object.values(citiesPopulation)); // This happens because arrays in JavaScript are a type of object.JavaScript treats arrays as special objects,
// console.log(Array.isArray(Object.values(citiesPopulation))); // to Check if It's an Array?



/*
6. Use a for-in loop to loop through an object containing city populations.
Skip any city in a new object named 'largeCities'.

let worldCities = {
    "Sydney" : 5000000;
    "Tokyo" : 9000000;
    "Berlin" : 3500000;
    "Paris" : 2200000;
    
}
*/

let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000,
    
}

let largeCities = {}

for (const city in worldCities) {
        if (worldCities[city] < 3000000){
            continue;
        }
        largeCities[city] = worldCities[city]
        
    }
    // console.log(largeCities);



    /*
    7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
    Stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'.
    */
    
    // inside the for-each loop we have to write a function and in the function we take a varriable which will iterate through each elements of the teaCollection.

    let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
    let availableTeas = []

    teaCollection.forEach(function(tea) {
        if (tea === 'chai'){
            return; // we can't use break here bcoz we are inside the function as well.
        }
        availableTeas.push(tea);
    });
    // console.log(availableTeas);



    /*
    8. Write a for-each loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
    Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
    */

    let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"]
    let traveledCities = []

    myWorldCities.forEach((city) => {
        if(city === "Sydney") {
            return; //  return inside a forEach() callback does not stop the entire loop—it only exits the current iteration
        }
        traveledCities.push(city);
    });
    // console.log(traveledCities);



    /*
    9. Write a for loop that iterates through the array [2, 5, 7, 9].
    Skip the value 7 and multiply the rest by 2. Store the result in a new array named 'doubleNumbers'.
    */

    let number = [2, 5, 7, 9]
    let doubleNumbers = []

    for (let i=0; i<number.length; i++){
        if(number[i] == 7){
            continue;
        } else {
            doubleNumbers.push(number[i] * 2);
        }

    }
    // console.log(doubleNumbers);



    /*
    10. Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named 'shortTeas'.
    */

    let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
    let shortTeas = []

    for (const tea of myTeas) {
        if(tea.length > 10){
            break;
        }
        shortTeas.push(tea);
    }
    console.log(shortTeas);
    
    





