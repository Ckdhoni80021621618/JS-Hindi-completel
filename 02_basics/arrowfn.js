const user = {
    username: "Chhotu",
    age: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username="Amrendra";
user.welcomeMessage();
//console.log(this);
//  window object in browser and global object in nodes 

// Arrow function
// const chai = function () {
//     let username = "hitesh";
//     console.log(this);
// }

const chai = () => {
    let username = "hitesh";
    console.log(this);
}
chai();


// const addTwonumbers = (number1,number2) => {
//   return number1+number2;
// }

//const addTwonumbers = (number1,number2) =>number1+number2;
const addTwonumbers = (number1,number2) =>(number1+number2);
console.log(addTwonumbers(6,5));
