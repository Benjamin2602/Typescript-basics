const ben : string[] = []

ben.push("Frontend Developer")
ben.push("next.js developer")
ben.push("react developer")

const skillLevel : number[]= []

skillLevel.push(3)
skillLevel.push(4)
skillLevel.push(3)

// we can also create the array in another way
// in java we say this is a generic array
const ben2 : Array<string> = []

ben2.push("Frontend Developer")
ben2.push("next.js developer")
ben2.push("react developer")

// we can create array using type alias

type User = {
    name : string
    age : number
}

const allUsers : User[] = []

allUsers.push({name : "ben", age : 20})
allUsers.push({name : "james", age : 15})
allUsers.push({name : "john", age : 12})

export {}