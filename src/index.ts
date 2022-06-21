let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol("star");
let biggy: bigint = 24n;

let regexp: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

/** A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

//Array
let array2: number[] = [1, 2, 3];

//Usage
array2 = [1];
array2 = [1, 2, 3, 4, 5];
array2 = ["hello"]; //Error

//Tuple
let tuple: [number, number] = [0, 0];

//Usage
tuple = [1, 1];
tuple = [2, 6];
tuple = [5]; // Error: must be 2 items
tuple = [5, 4, 3]; // Error: must be 2 items
tuple = ["elite", 1337]; // Error: must be number

/////////////

let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

let unit: { x: number; y: number } = {
  x: 1,
  y: 1,
};

type Point = { x: number; y: number };

let objectExample: Point = {
  x: 2,
  y: 2,
};

const point: Point = { x: 0, y: 0 };

point = { x: 1, y: 1 }; // Error

// All other behaviours are the same as `let`
point.x = 123;
point.y = 456;
