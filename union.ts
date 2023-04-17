let score : number | string | null = 69

score = 'ben'
score = 96


// type aliases can be used to create unions
type user = {
    name: string,
    age: number,
    isActive?: boolean,
}

type admin = {
    username: string,
    age: number,
}

// type aliases can be used to create unions
let ben : user | admin = {
    name: 'ben',
    age: 69,
}
ben = {
    username: 'ben_2602',
    age: 69,
}

type userOrAdmin = user | admin

let sam : userOrAdmin = {
    name: 'sam',
    age: 69,
}

function getDbId(id: string | number) {
    // making api call
    console.log(`Db id is ${id}`)
    // id.toUpperCase() // this will not work because id is a union type
}

getDbId(123)
getDbId('123')

function getDbName(id: string | number) {
    if (typeof id === 'number'){
        console.log(`Db id is ${id}`)
    } else {
        id.toLowerCase()
    }}

// arrays
const data : (number | string)[] = [1,2,"john",3,4,5,"ben", "sam"]