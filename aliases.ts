type User = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return {
    name: "ben",
    age: 20,
    email: "",
    isActive: true,
  };
}

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// to create a type alias
type myString1 = string;
type myString2 = number;


// to use READONLY and optional properties
// ? means optional

type User2 = {
    readonly _id: string
    name: string
    age?: number
}

let myUser : User2 = {
    _id : "1234",
    name : "ben"
}

myUser.name = "james"
// it shows an error here because _id is readonly
// myUser._id = "bbb"

type cardNumber = {
    cardNumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate &{
    cvv: number
}

export {};
