/*
1. Declare an array named 'teaFlavours' that contains the strings "green tea", "black tea", and "oolong tea".
Access the first element of the array and store it in a varriable named 'firstTea'.
*/

// let teaFl = new Array("greem tea", "black tea", "oolong tea");  also a method to declare array

let teaFlavours = ["green tea", "balck tea", "oolong tea"];

const firstTea = teaFlavours[0];
// console.log(firstTea);



/*
2. Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New York".
Access the third element in the array and store it in a varriable named 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "New York"]
const favoriteCity = cities[2]
// console.log(favoriteCity);



/*
3. You have an array named 'teaTypes' containing "herbal tea", "white tea", and "massala chai".
Change the second element of the array to "jasmine tea".
*/

let teaTypes = ["herbal tea", "white tea", "massala chai"]

teaTypes[1] = "jasmine tea"
// console.log(teaTypes[1]);




/*
4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney".
Add "Berlin" to the array using the push method.
*/

let citiesVisited = ["Mumbai", "Sydney"]
// citiesVisited[2] = "Berlin"  it also works but what if we don't know the size of the array

// citiesVisited[citiesVisited.length] = "Berlin"

citiesVisited.push("Berlin")

// console.log(citiesVisited.length);

// console.log(citiesVisited[2]);  
// console.log(citiesVisited);  



/*
5. You have an array named 'teaOrders' with "chai", "iced tea", "matcha", and "earl grey".
Remove the last element of the array using pop method and store it in a varriable named lastOrder.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
// teaOrders.pop(); // it automatically removes the last elements.
const lastOrder = teaOrders.pop();

// console.log(teaOrders);
// console.log(lastOrder);



/*
6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai."
create a soft copy of this array named 'softCopyTeas'.
*/

// Changes in the copied array affect the original array for objects.
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas; // you are not creating a new copy of popularTeas. Instead, you are just creating a reference (another name) for the same array in memory.
// popularTeas.pop();
softCopyTeas.pop()
console.log(softCopyTeas);
console.log(popularTeas);



/*
7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
Create a hard copy of this array named 'hardCopyCities'.
*/

// Changes in the copied array do NOT affect the original array.

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // mostly we use this only
// let hardCopyCities = topCities.slice();
// topCities.pop();
hardCopyCities.pop()

console.log(topCities);
console.log(hardCopyCities);



/*
8. You have two arrays: 'europeanCities' containing "Paris", and "Rome", and 'asianCities' containing "Tokoyo" and "Bangkok".
Merge these two arrays into a new array named 'worldCities'.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bankok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);




/*
9. You have an array named 'teaMenu' containing "masala chai", "oolong tea", and "earl grey".
Find the length of the array and store it in a varraible named 'menuLength'.
*/

let teaMenu = ["Masala chai", "oolong tea", "earl grey"]

let menuLength = teaMenu.length;
console.log(menuLength);



/*
10. You have an array named 'cityBucketList' containing "Kyoto", "London", "Cape Town", and "Vancouver".
check if "London" is in the array and store the result in a variable named 'isLondonList'.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonList = cityBucketList.includes("London");
console.log(isLondonList);










