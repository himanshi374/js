
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "himanshi",
            lastname: "soni"
        }
    }
}

//console.log(regularUser);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2)


const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));