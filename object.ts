const User = {
    name : "ben",
    age : 20,
    email : "ben@example.com",
    isActive : true
}

function createUser({name: string, age:number, isActive:boolean}){

}
// it shows an error 
//createUser()
createUser({name : "ben", age : 20, isActive : true})

// what happens when a function returns an object
// syntax
function createObj ():{}{
    return {}
}

function createCourse():{name:string, price:number}{
    return {
        name : "typescript",
        price :  389
    }
}

// bad behaviour in objects 

function createUser2({name:string, isActive:boolean}){

}
// this shows an error because age is not passed in the function
// createUser2({name : "ben", age : 20, isActive : true})

// to fix this we can use the ? sign
function createUser3({name:string, isActive:boolean}){

}
let newUser= {name : "ben", isActive : true}

createUser3(newUser)



export {}