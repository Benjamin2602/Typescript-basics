"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we use this in api calls to define the type of data we expect to get back from the server
// in tuple it comes with a fixed length and fixed type in the order it is defined
// even the order of the array is important
var tUser = ["ben", 20];
//array with union
var tUser2 = ["ben", 20, 78, "sam"];
var newUser = [1234, "ben@gmail.com"];
// i can change using index
newUser[1] = "sam@gmail.com";
// still its possible to use array method
//avoid don't using it
newUser.push(125666);
