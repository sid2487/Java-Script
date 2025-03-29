// alert("connected"); 
// ** DOM Manipulation actually does two things all the time: event listening and get the element

// Example 1 
// ways of selcting: Select according to your need
// document.querySelector('#changeTextButton')
// document.querySelectorAll('')

// let hold = document.getElementById("changeTextButton") // for the checking purpose
// console.log(hold);

// ** in the .addEventListener() it takes two thing, first what work u want to do and second is the function (don't use arrow function bcoz this will always point to the global context i.e window object) bcoz it points to the current context who is calling it.

document.getElementById("changeTextButton").
addEventListener("click", function (){
    // console.log(this);
    let para = document.getElementById("myParagraph")
    // console.log(para);
    para.textContent = "the paragraph is changed"
})

// Example 2

document.getElementById("highlightFirstCity")
.addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList")
    citiesList.firstElementChild.classList.add("highlight")

})

// Example 3

document.getElementById("changeOrder")
.addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso"
    coffeeType.style.backgroundColor = "brown" // usign this we can add css prop. to it
    coffeeType.style.padding = "5px"
    coffeeType.style.marginBottom = "20px"
    coffeeType.style.borderRadius = "5px"
})

// Example 4

document.getElementById("addNewItem")
.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
})

// Example 5
document.getElementById("removeLastTask")
.addEventListener("click", function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
})

// Example 6
document.getElementById("clickMeButton")
.addEventListener("click", function(){
    alert("She don't like you mf, so get you ass off and work as fucking hard as you can!!")
})

// Example 7

document.getElementById("teaList")
    .addEventListener("click", function(event){
        if(event.target && event.target.matches(".teaItem")){
            alert("You selected: " + event.target.textContent)
        }
    })

    // Example 8
    document.getElementById("feedbackForm")
    .addEventListener("submit", function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        // console.log(feedback);
        document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`
        feedbackDisplay.style.backgroundColor = "pink"
        feedbackDisplay.style.color = "black"
        feedbackDisplay.style.borderRadius = "12px"
        
    })

    // Example 9
    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("domStatus").textContent = "DOM fully loaded"
    })

    // Example 10
    document.getElementById("toggleHighlight")
    .addEventListener("click", function(){
        let descriptionText = document.getElementById("descriptionText");
        // descriptionText.classList.add("highlight")
        descriptionText.classList.toggle("highlight")
    })



