// function is a block of code which perform a specific task

function addTwonumbers(num1,num2){
  // const result=num1+num2;
  // return result;
  return num1+num2
}
const ans=addTwonumbers(3,5);
console.log(ans);


function loginUserMessage(username = "Sam") {
  if (username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());


//Rest operator and spread operator

function calculateCartPrice(val1,val2,...num1){
  return num1;
}
console.log(calculateCartPrice(76,43,7,3,8,65))

// passing object to function............ 

const user={
  userNmae:"Amrendra singh",
  age:55,
}

function handleObject(anyobj){
  console.log(`userName  is ${anyobj.userNmae} and price is ${anyobj.age}`)
}
// handleObject(user); passing object to function by variable 

handleObject({
  userNmae:"Chhotu",
age:25})
// passing object to function directly without variable

//passing array to function....
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); passin array by variavle.. name
console.log(returnSecondValue([200, 400, 500, 100]));

//directly passing aaray 

