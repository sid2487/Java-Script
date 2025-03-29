// A Promise is in one of these states:
// pending, fulfilled or rejected


// Promise Creation
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully")
            } else {
                reject("Error fetching data")
            }
        }, 3000);
    })
}

// Consume Promise
fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })
    .then((value) => {
        console.log(value);
        
    })
    .catch((error) => console.log(error))