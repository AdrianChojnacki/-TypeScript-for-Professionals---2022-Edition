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
    data = [];
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
let user = { id: "user-asfef23" };
let product = { id: "product-fwefw575" };
user = product;
product = user;
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
/** Extra info ok */
point2D = point3D;
function takesPoint2D(point) {
    /** ... */
}
takesPoint2D(point3D);
/** Error: missing info */
point3D = point2D;
function takesPoint3D(point) {
    /** ... */
}
takesPoint3D(point2D);
class Animal {
    name;
    nick;
    constructor(name, nick) {
        this.name = name;
        this.nick = nick;
    }
    move(distanceInMeters) {
        console.log(`${this.name} ${this.nick} moved ${distanceInMeters}`);
    }
}
let cat = new Animal("Cat", "Fluffy");
cat.move(10);
cat.name = "Dog";
cat.nick = "Puppy";
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} ${this.nick} flew ${distanceInMeters}`);
    }
}
/** A FIFO (First In First Out) collection */
class Queue2 {
    data = [];
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue2 = new Queue2();
queue2.push(123);
queue2.push("Hello world");
console.log(queue2.pop().toPrecision(1));
console.log(queue2.pop().toPrecision(1));
let exampleAny;
let exampleUnknown;
// any
exampleAny = 123;
exampleAny = "Hello";
// unknown
exampleUnknown = 123;
exampleUnknown = "Hello";
// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool = exampleAny;
// unknown
if (typeof exampleUnknown == "string") {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
    let unknownSetBool = exampleUnknown;
}
let someLegacyVariable1;
let someLegacyVariable2;
someLegacyVariable1 = toString();
console.log(someLegacyVariable1.trim());
someLegacyVariable2 = toString();
if (typeof someLegacyVariable2 == "string") {
    console.log(someLegacyVariable2.trim());
}
function log2(value) {
    console.log(value.toFixed(2));
}
log2(123.1223);
log2("Hello");
function log3(value) {
    if (typeof value == "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
log3(123.1223);
log3("Hello");
