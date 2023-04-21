// we use this in api calls to define the type of data we expect to get back from the server
// in tuple it comes with a fixed length and fixed type in the order it is defined
// even the order of the array is important
const tUser : [string, number] = ["ben", 20]

//array with union
const tUser2 : (string | number)[] = ["ben", 20,78,"sam"]

// if there is user with id and email
type user9 = [ number, string]

const newUser: user9 = [1234, "ben@gmail.com"]
// i can change using index
newUser[1]= "sam@gmail.com"

// still its possible to use array method
//avoid don't using it
newUser.push(125666)





export{}