const person = {
    name: "Tamanna",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    },
};

person.greet(); // here we are directly executing this greet function, that's why it know the context.

const greetFunction = person.greet // but as soon as we transfer this to another variable then context is lost in this case.
greetFunction();

// so we have to bind if we want it to remember the context
const boundGreet = person.greet.bind({name: "Sid"});
boundGreet();