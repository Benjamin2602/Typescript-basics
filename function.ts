function addTwo(num){
    return num+2
}


// to fix this any type into number type

function addTwo2(num:number){
    return num+2
}


function signUpUser(name:string, password:string, email:string, isPaid:boolean){
    
}



let loginUser = (name:string, password:string, isPaid:boolean = false) => {
    
}

addTwo(5)
addTwo2(5)
signUpUser("ben", "1234", "ben", true)
loginUser("ben", "1234")

// To write a function in typescript in a better way

// the argument we pass also should be number type
// the function should return number type if not it gives an error
function addTwo3(num:number):number {
    return num+2
}
addTwo3(5)

const getVal = (s:string):string =>{
    return "hello"

}
getVal("ben")

const heros = ["ben", "james", "john", "joe"]

heros.map((hero:string)=>{
    return `hero is ${hero}`
})

// is does not return anything
function consoleError(message:string):void{
    console.log(message)
}

// it never return anything
function handleError(message:string):never{
    throw new Error(message)
}


export {}