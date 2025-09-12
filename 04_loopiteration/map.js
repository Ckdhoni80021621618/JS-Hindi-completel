
//MAP METHOD is used to create a new array from an existing array by performing some operation on each element of the array.it return a new array doesnt modify the original array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


// map हर element पर काम करके नई array बनाता है
// इसका उपयोग तब करें जब array के elements को बदलना हो
// यह original array को नहीं बदलता, बल्कि नई array देता है


