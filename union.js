var score = 69;
score = 'ben';
score = 96;
// type aliases can be used to create unions
var ben = {
    name: 'ben',
    age: 69,
};
ben = {
    username: 'ben_2602',
    age: 69,
};
var sam = {
    name: 'sam',
    age: 69,
};
function getDbId(id) {
    // making api call
    console.log("Db id is ".concat(id));
    // id.toUpperCase() // this will not work because id is a union type
}
getDbId(123);
getDbId('123');
function getDbName(id) {
    if (typeof id === 'number') {
        console.log("Db id is ".concat(id));
    }
    else {
        id.toLowerCase();
    }
}
// arrays
var data = [1, 2, "john", 3, 4, 5, "ben", "sam"];
