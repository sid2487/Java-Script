const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB call, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()

    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

// another example

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");

})

// another example

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Tamanna", email: "tam@gmail.com" })
        console.log("Async 3 resolved");

    }, 4000);
})

promiseThree.then(function (user) {
    console.log(user);

})

// another example

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "sid", password: "1234" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// another example(async and await)

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "sachin", password: "1234" })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.









// ** Important points to be remember while dealing with the apis or fetch:

// fetch and response.json() are two promises—one gets the data, the other processes it into JSON.
// Chaining .thens lets us wait for each step to finish before moving to the next. It’s like: "Get the package, then open it, then use what’s inside."

// Rule of Thumb: If a method (like .json()) returns a promise, chain another .then. If it’s just plain data, one .then can do it.

// "Hit the API with fetch, it spits back a promise with raw Response data, so you slap a .then to turn it into JSON—which is another damn promise—so you return it and use a second .then to show the readable goods."

// Ex: 
fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
        return response.json() // return response.json() in the first .then passes the Promise to the next .then 
    })
    .then((data) => {
        console.log(data); // The second .then waits for that Promise to resolve, then gets the actual JSON data (e.g., {setup: "Why...", punchline: "Because..."}).

    })
    .catch((err) => {
        console.log(`Error fetching the data: ${err}`);
    })

// Use.then:
// Simple Stuff: One or two quick steps(e.g., fetch, parse, done).
// Chaining Vibes: You like the flow of passing data down a chain.
// No Function Wrap: Don’t want to wrap it in a function.





// using async and await

async function getJoke() {
    try {
        
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            console.log(data);

        
    } catch (error) {
        console.log((`Error: ${error}`));

    }
}
getJoke();

// Use async / await:
// Multiple Steps: Lots of promises in a row(e.g., fetch, parse, then fetch again).
// Readable Code: Want it to look like regular step - by - step code.
// Error Control: Easier to handle errors with try/catch in complex flows.


// see the file apiProject.js 



