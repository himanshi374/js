// singleton
//object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Himanshi",
    fullname: "Himanshi Soni",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhilwara",
    email: "himanshi511@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.fullname);
console.log(JsUser[mySym]);


JsUser.greeting = function(){
    console.log("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());