
//for each loop is used to iterate over the array elements 
// forEach is an array method
// that runs a function on each element of the array

array.forEach(function(currentValue, index, array) {// using regular function
    // code to execute for each element
});

array.forEach((currentValue, index, array) => {// using arrow function
    // code to execute for each element
});




const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// forEach एक array method है
// जो array के हर element पर एक function चलाता है
// इसका उपयोग तब करते हैं जब हमें हर element पर कोई action करना हो
// यह नई array नहीं बनाता, सिर्फ काम करता है



