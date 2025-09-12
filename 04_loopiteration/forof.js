// for of loop  values ko iterate karta hai array k andar

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps and sets play well with for of loop

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}
// for (const key of map.keys()) {
//     console.log(key);
// }
//ye key ko iterate krega

// for (const value of map.values()) {
//     console.log(value);
// } 
//ye value ko iterate krega

    
//Object ke liye for of loop  nhi chalta hai 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//  for (const [key, value] of myObject) {
//      console.log(key, ':-', value);
    
//  } throws error 