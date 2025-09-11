const person = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};
console.log("Keys:", Object.keys(person));////it wii return the key of object in array
console.log("Values:", Object.values(person));//it wii return the value of object in array
console.log( Object.entries(person));//it will return all key  and value in arrays of arrays
// like this [ [ 'name', 'Rahul' ], [ 'age', 25 ], [ 'city', 'Delhi' ] ]

console.log(person.hasOwnProperty("name"));//it will check the property is present or not in object

const target={ a:1,b:2,c:3};
const source={d:4,e:5,f:6};
console.log(target);
console.log(source);
const addedObject=Object.assign({},target,source);//it wii add two object
//it will not change target and source object
//it wiil create new object and add target and source object in it
const obj3={...target,...source};//spresd operator to add two object 
console.log(obj3);
console.log(addedObject);


//Object Destructuring...
// Object Destructuring is a way to extract key-value pairs from an object directly into separate variables. This eliminates the need to repeatedly write object.key, making the code cleaner, shorter, and easier to read.

const person1 = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

//Normal way------------
// const name = person1.name;
// const age = person1.age;
// const city = person1.city;


//object destructuring way

// const { name, age, city } = person1;
// console.log(name, age, city);

//if we want to change the variable name then---

// const { name: personName, age: personAge, city: personCity } = person1;
// console.log(personName, personAge, personCity);

// if we want to set default value then---

const { name, age = 30, city } = person1;
console.log(name, age, city);

//nested object destructuring----

const person2 = {
    name1: "Rahul",
    address2: {
        city3: "Delhi",
        state4: "Delhi"
     }
};

const { name1, address2: { city3, state4 } } = person2;
console.log(name, city, state);



