"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "ben", id: 1234, dbId: 1234,
    // another interface property
    githubToken: "1234",
    // inherited property
    role: "admin",
    // method from interface
    startTrail: function () {
        return "start trail";
    },
    getCoupon: function (couponName) {
        return 1234;
    }
};
