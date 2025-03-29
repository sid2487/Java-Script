function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chaicode", url: "https://chaicode.com"})
        }, 3000);
    })
}

// you can only use the keyword await when you have async in your function

async function getUserData(){
    try {
        console.log("Fetching user data....");
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        
        console.log("User Data", userData);
    } catch (error) {
        console.error("Error fetching data", error);
        
    }
}
getUserData();