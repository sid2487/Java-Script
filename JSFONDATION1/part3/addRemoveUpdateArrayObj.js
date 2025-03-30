// ==================================================
// 📌 Arrays, Objects, and Arrays of Objects in JavaScript
// ==================================================

/* 
    ✅ Covers:  
    - Adding elements  
    - Removing elements  
    - Updating elements  
    - What arguments they take  
    - What they return  
    - Whether they take a callback function or not  
*/

// ===================
// 📌 1️⃣ Arrays
// ===================

// 🔹 Add Elements to an Array
let arr = [10, 20];

/*
push(...elements) → Adds elements at the end  
   - Takes: One or more elements  
   - Returns: New length of the array  
   - Callback: ❌ No  
*/
arr.push(30);  // [10, 20, 30]

/*
unshift(...elements) → Adds elements at the beginning  
   - Takes: One or more elements  
   - Returns: New length of the array  
   - Callback: ❌ No  
*/
arr.unshift(5); // [5, 10, 20, 30]

// 🔹 Remove Elements from an Array
let numbers = [10, 20, 30, 40];

/*
pop() → Removes last element  
   - Takes: Nothing  
   - Returns: Removed element  
   - Callback: ❌ No  
*/
numbers.pop();   // [10, 20, 30]

/*
shift() → Removes first element  
   - Takes: Nothing  
   - Returns: Removed element  
   - Callback: ❌ No  
*/
numbers.shift(); // [20, 30]

/*
splice(index, deleteCount, ...itemsToAdd) → Removes/Replaces elements at a specific index  
   - Takes: (index, number of elements to remove, optional elements to add)  
   - Returns: Array of removed elements  
   - Callback: ❌ No  
*/
numbers.splice(1, 1); // Removes index 1 → [20]

/*
Using splice() to remove the last element  
*/
numbers.splice(numbers.length - 1, 1); // Removes last element → [20]

/*
filter(callback(element, index, array)) → Keeps only elements that match condition  
   - Takes: Callback function  
   - Returns: New filtered array  
   - Callback: ✅ Yes  
*/
let filtered = numbers.filter(num => num !== 20); // Removes 20 → [30]

// 🔹 Update Elements in an Array
let scores = [10, 20, 30];

/*
Direct update using index  
   - Takes: Index and new value  
   - Returns: Nothing (modifies original array)  
   - Callback: ❌ No  
*/
scores[1] = 25; // [10, 25, 30]

/*
map(callback(element, index, array)) → Modifies each element  
   - Takes: Callback function  
   - Returns: New array with modified values  
   - Callback: ✅ Yes  
*/
let updatedScores = scores.map(num => num * 2); // [20, 50, 60]

// ===================
// 📌 2️⃣ Objects
// ===================

let user = { name: "Alice", age: 25 };

/*
Adding / Updating Properties in an Object  
   - Takes: Key-value pair  
   - Returns: Nothing (modifies original object)  
   - Callback: ❌ No  
*/
user.city = "New York";  // Adds a new property  
user.age = 26; // Updates existing property

/*
Object.assign(target, source) → Copies properties from source to target  
   - Takes: Target object, source object  
   - Returns: New object with merged properties  
   - Callback: ❌ No  
*/
let updatedUser = Object.assign({}, user, { country: "USA" });

/*
Spread operator {...obj} → Copies object and updates properties  
   - Takes: Object  
   - Returns: New object with updated values  
   - Callback: ❌ No  
*/
let newUser = { ...user, profession: "Engineer" };

/*
delete obj.property → Removes a property  
   - Takes: Property name  
   - Returns: Nothing (modifies original object)  
   - Callback: ❌ No  
*/
delete user.city; // Removes 'city' property

/*
Object.entries(obj).filter(callback) → Removes a key dynamically  
   - Takes: Callback function  
   - Returns: New object without filtered keys  
   - Callback: ✅ Yes  
*/
let filteredUser = Object.fromEntries(Object.entries(user).filter(([key]) => key !== "age"));

// ===================
// 📌 3️⃣ Arrays of Objects
// ===================

let tasks = [
    { id: 1, task: "Buy Milk" },
    { id: 2, task: "Go to Gym" }
];

/*
push(...elements) → Adds an object to the array  
   - Takes: Object(s) to add  
   - Returns: New length of array  
   - Callback: ❌ No  
*/
tasks.push({ id: 3, task: "Learn Node.js" });

/*
filter(callback(element, index, array)) → Removes an object by condition  
   - Takes: Callback function  
   - Returns: New filtered array without the removed object  
   - Callback: ✅ Yes  
*/
tasks = tasks.filter(task => task.id !== 2); // Removes task with id 2

/*
map(callback(element, index, array)) → Updates an object by condition  
   - Takes: Callback function  
   - Returns: New updated array  
   - Callback: ✅ Yes  
*/
tasks = tasks.map(task => task.id === 1 ? { ...task, task: "Buy Almond Milk" } : task);

/*
splice(index, deleteCount) → Removes an object at a specific index  
   - Takes: (index, number of elements to remove)  
   - Returns: Removed elements in an array  
   - Callback: ❌ No  
*/
tasks.splice(tasks.length - 1, 1); // Removes last task from the list

/*
find(callback(element, index, array)) → Finds and returns the first matching object  
   - Takes: Callback function  
   - Returns: The first matching object or undefined  
   - Callback: ✅ Yes  
*/
let foundTask = tasks.find(task => task.id === 1); // Finds task with id 1

/*
some(callback(element, index, array)) → Checks if at least one element matches the condition  
   - Takes: Callback function  
   - Returns: true or false  
   - Callback: ✅ Yes  
*/
let hasTask = tasks.some(task => task.task === "Buy Milk"); // true or false

/*
every(callback(element, index, array)) → Checks if all elements match the condition  
   - Takes: Callback function  
   - Returns: true or false  
   - Callback: ✅ Yes  
*/
let allTasksValid = tasks.every(task => task.id > 0); // true or false
