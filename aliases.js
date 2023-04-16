"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return {
        name: "ben",
        age: 20,
        email: "",
        isActive: true,
    };
}
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var myUser = {
    _id: "1234",
    name: "ben"
};
myUser.name = "james";
