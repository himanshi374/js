
function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("i");
}

//sayMyName()

//function addTwoNumbers(number1, number2){
  //     console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
   //let result = number1 + number2
   //return result
   return number1 + number2
}

const result = addTwoNumbers(2 , 2)
//console.log("result:", result);



function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username.");
        return
    }
   return `${username} just logged in`
}

//console.log(loginUserMessage("himanshi"));
//console.log(loginUserMessage(""));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
     return num1
}

//console.log(calculateCartPrice(22, 33 ,44));

const user = {
    username: "himanshi",
    price: 199,
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "himanshi",
    price: 399,
})

const myNewArray = [200,300,100,600]

function returnSecondValue(getArray){
   return getArray[3]
}

console.log(returnSecondValue(myNewArray));