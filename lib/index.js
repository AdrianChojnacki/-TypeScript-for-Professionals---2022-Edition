"use strict";
let isPresent = false;
let magic = 66.6;
let hello = "world";
let notDefined = undefined;
let notPresent = null;
let penta = Symbol("star");
let biggy = 24n;
let regexp = new RegExp("ab+c");
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
/** A first in first out collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
//Array
let array2 = [1, 2, 3];
//Usage
array2 = [1];
array2 = [1, 2, 3, 4, 5];
array2 = ["hello"]; //Error
//Tuple
let tuple = [0, 0];
//Usage
tuple = [1, 1];
tuple = [2, 6];
tuple = [5]; // Error: must be 2 items
tuple = [5, 4, 3]; // Error: must be 2 items
tuple = ["elite", 1337]; // Error: must be number
/////////////
let center = {
    x: 0,
    y: 0,
};
let unit = {
    x: 1,
    y: 1,
};
let objectExample = {
    x: 2,
    y: 2,
};
const point = { x: 0, y: 0 };
point = { x: 1, y: 1 }; // Error
// All other behaviours are the same as `let`
point.x = 123;
point.y = 456;
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log("LOG:", message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
sum(1, 2); // 3
sum(1, 2, 3); // 6
let add2;
add2 = function (a, b) {
    return a + b;
};
add2 = (a, b) => a + b;
