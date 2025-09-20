const clock=document.getElementById('clock');

// let date =new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date =new Date();//
 clock.innerHTML=date.toLocaleTimeString();//method hai jo time ko local format me deta hai or 
console.log();
},1000)

//let now = new Date();

//  JavaScript ka ek line hai jo ek naya Date object banata hai.
// Ye object system ki current date aur time ko represent karta hai.


// toLocaleTimeString() date object ka method hai jo current time ko system ke locale format me string ke roop me return karta hai