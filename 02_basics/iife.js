//IIFE immediately invoked function expression
(function chai(){
  //named iife
  console.log("I am chai function named iife")
})();

((name) =>{
  console.log("name:" + name)
}) ("Amrendra")