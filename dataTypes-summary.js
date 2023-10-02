//primitive datatypes

// 7 types : string ,number, boolean, null, undefined, symbol, bigint

/*   js dynamically typed language or static typed language?
 Aons:-  js is dynamically typed language which means that data types of variables are determined by the 
value they hold at run-time and can change throughout the program as we assign different values
to them.*/

const score =100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; --undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 656544461878589963244n

//refrence datatypes(non-primitive)

//3types : arrays, object, function

const heros = ["shaktiman","nagraj","doga"];
let myObj = {
    name: "himanshi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);