
// The typeof operator in JavaScript is used to determine the type of a given variable or expression. It returns a string indicating the type of the operand. This can be especially useful for debugging and type checking in your code.

// Syntax
// typeof operand

// Here, operand can be any variable, expression, or value whose type you want to determine.


// Number
let age = 25;
console.log(typeof age); // "number"

// String
let name = "Alice";
console.log(typeof name); // "string"

// Boolean
let isActive = true;
console.log(typeof isActive); // "boolean"

// Undefined
let x;
console.log(typeof x); // "undefined"

// Null
let y = null;
console.log(typeof y); // "object" (this is a known quirk in JavaScript)

// Symbol
let sym = Symbol('description');
console.log(typeof sym); // "symbol"

// BigInt
let bigInt = 123456789012345678901234567890n;
console.log(typeof bigInt); // "bigint"

// Function
function greet() {
    return "Hello, World!";
}
console.log(typeof greet); // "function"

// Object
let person = {
    name: "Alice",
    age: 25
};
console.log(typeof person); // "object"

// Array
let colors1 = ["red", "green", "blue"];
console.log(typeof colors1); // "object" (arrays are considered objects in JavaScript)

// Special Cases and Notes
// Null
// As noted, typeof null returns "object", which is a long-standing bug in JavaScript. null is not an object but a primitive type.
// To check for null, it's better to use a strict equality check:
let y1 = null;
console.log(y1 === null); // true
Arrays

// Arrays are technically objects, so typeof an array will return "object".
// To check if a variable is an array, use Array.isArray():

let colors = ["red", "green", "blue"];
console.log(Array.isArray(colors)); // true

// Functions
// Functions are a special type of objects, and typeof will correctly identify them as "function".
function greet() {
    return "Hello, World!";
}
console.log(typeof greet); // "function"

// Distinguishing between Different Object Types
// For more detailed type checking beyond typeof, such as distinguishing between different types of objects, you might use instanceof or constructor checks:
let date = new Date();
console.log(date instanceof Date); // true
console.log(date.constructor === Date); // true