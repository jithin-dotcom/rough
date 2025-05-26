"use strict";
let t = [25, "john"];
let q = 9;
var userRoles;
(function (userRoles) {
    userRoles["USER"] = "user";
    userRoles["ADMIN"] = "admin";
})(userRoles || (userRoles = {}));
let c;
c = true;
let obj = {
    name: "john",
    age: 25,
    isUser: false,
    gender: "male"
};
let b;
b = 24;
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
function abcd(name, age, cb) {
    cb("jithin");
}
function ab(arg) {
    console.log(arg);
}
abcd("john", 25, ab);
function print(obj) {
    console.log(obj);
}
print({ name: "john", age: 25, jj: "fff" });
