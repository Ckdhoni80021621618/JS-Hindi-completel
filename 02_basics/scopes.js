let a=300;
const b=400;
var c=500;

console.log(a);
console.log(b);
console.log(c);

if(true){
let a=30;
const b=40;
console.log(a);
console.log(b);

}

// function scope  concept ......
function one() {
    const username = "Amrendra";   // outer function का variable

    function two() {
        const website = "youtube";  // inner function का variable
        console.log(username);     // outer function से value access कर रहा है
    }
     //console.log(website);  error,inner function ka variable ko access nhi kr sakta....
    two();  // inner function को कॉल कर रहे हैं
}
one(); // outer function को कॉल कर रहे हैं


//if block scope concept.....
if (true) {
    const username = "Amrendra";  // if block का variable
    if (username === "Amrendra") {
        const website = " youtube";  // inner if block का variable
        console.log(username + website);  // दोनों को जोड़ कर दिखा रहा है
    }
    // console.log(website); // यहाँ website को एक्सेस नहीं कर सकते, क्योंकि यह inner block में है
}
// console.log(username); // यहाँ username को एक्सेस नहीं कर सकते, क्योंकि यह outer block तक सीमित है

  // +++++++++++ Intresting concept +++++++++++

  //addOne(4) it will work because of function hoisting
  function addOne(num1){
    return num1+1
  }
  addOne(4)

//addTwo(5) it will not work because it is function expression 
  const addTwo=function(num2){ //  <--------function expression
    return num2+2
  }
  addTwo(5)




