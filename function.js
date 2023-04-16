"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// to fix this any type into number type
function addTwo2(num) {
    return num + 2;
}
function signUpUser(name, password, email, isPaid) {
}
var loginUser = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
addTwo2(5);
signUpUser("ben", "1234", "ben", true);
loginUser("ben", "1234");
// To write a function in typescript in a better way
// the argument we pass also should be number type
// the function should return number type if not it gives an error
function addTwo3(num) {
    return num + 2;
}
addTwo3(5);
var getVal = function (s) {
    return "hello";
};
getVal("ben");
var heros = ["ben", "james", "john", "joe"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// is does not return anything
function consoleError(message) {
    console.log(message);
}
// it never return anything
function handleError(message) {
    throw new Error(message);
}
