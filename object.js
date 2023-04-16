"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ben",
    age: 20,
    email: "ben@example.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isActive;
}
// it shows an error 
//createUser()
createUser({ name: "ben", age: 20, isActive: true });
// what happens when a function returns an object
// syntax
function createObj() {
    return {};
}
function createCourse() {
    return {
        name: "typescript",
        price: 389
    };
}
// bad behaviour in objects 
function createUser2(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// this shows an error because age is not passed in the function
// createUser2({name : "ben", age : 20, isActive : true})
// to fix this we can use the ? sign
function createUser3(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = { name: "ben", isActive: true };
createUser3(newUser);
