// Ojects literals

const mySymbol=Symbol("key1");


let jsuser={
  [mySymbol]:"key1",
  name:"Amrendra singh",
  age:55,
  location:"Dadanpur",
  wife:"Shruti singh",
  sex:"two times",
  email:"vcgcgc@GamepadHapticActuator.com",
  isLoggedIn:false,
  "full name":"Thakur Amrendra singh",
  lastlogin:["Monday","sunday"]

}
console.log(jsuser);
jsuser.email="nfdnvbbvb@gmail.com";
console.log(jsuser.email);
console.log(jsuser);
//Object.freeze(jsuser);
jsuser.email="c sdj cj dc@gmail.com";
console.log(jsuser.email);

jsuser.greeting=function(){
  console.log("Hello world");
}
jsuser.greetingTwo=function(){
  console.log(`hello user${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
