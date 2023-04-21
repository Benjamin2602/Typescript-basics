"use strict";
// there are certain times when you want to restrict somebody's choice 
Object.defineProperty(exports, "__esModule", { value: true });
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["window"] = 12] = "window";
    seatChoice[seatChoice["aisle"] = 13] = "aisle";
    seatChoice["fourth"] = "ben";
    seatChoice[seatChoice["middle"] = 69] = "middle";
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.window;
