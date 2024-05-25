// Primitive Data Types
// Primitive data types are basic types that are immutable,
// meaning their values cannot be changed once created.
// Operations on primitives return new values rather than altering the original value.

// Number: Represents both integer and floating-point numbers.

let age = 25;        // Integer
let price = 19.99;   // Floating-point number
console.log("Age:", age); // Outputs: Age: 25

// String: Represents sequences of characters.
let name = "Alice";  // String of characters
console.log("Name:", name); // Outputs: Name: Alice

// Boolean: Represents logical entities with two values: true or false.
let isActive = true; // Boolean true
let isMember = false;// Boolean false
console.log("Is active:", isActive); // Outputs: Is active: true
console.log("Is Member:", isMember);//Outputs: Is Member: False

// Undefined: Indicates a variable that has been declared but not assigned a value.
let x;               // Variable declared without a value
console.log("x:", x); // Outputs: x: undefined

// Null: Represents the intentional absence of any object value.
let y = null;        // Explicitly sets y to have no value
console.log("y:", y); // Outputs: y: null

// Symbol: Represents a unique and immutable value, often used as object keys.
let sym = Symbol('description'); // Unique symbol
console.log("Symbol:", sym); // Outputs: Symbol: Symbol(description)

// BigInt: Represents whole numbers larger than 2^53 - 1,
// which is the largest number JavaScript can reliably represent with the Number primitive.
let bigInt = 123456789012345678901234567890n; // BigInt literal
console.log("BigInt:", bigInt); // Outputs: BigInt: 123456789012345678901234567890n



//-----------------------------------------------------------------------------------------------------------



// Non-Primitive (Reference) Data Types
// Non-primitive data types, also known as reference types,
// are objects. They are mutable, meaning their properties or elements can be changed. 
// Variables do not directly hold the value, but rather a reference to the value in memory.

// Object: A collection of key-value pairs.
let person = {
    name: "Alice",   // Property name with string value
    age: 25         // Property age with number value
};
console.log("Person:", person); // Outputs: Person: { name: 'Alice', age: 25 }

// Array: An ordered collection of values.
let colors = ["red", "green", "blue"]; // Array with string elements
console.log("Colors:", colors); // Outputs: Colors: [ 'red', 'green', 'blue' ]

// Function: A block of code designed to perform a particular task.
function greet() {
    return "Hello, World!"; // Function returning a string
}
console.log("Greet:", greet()); // Outputs: Greet: Hello, World!

// Date: Represents date and time.
let today = new Date(); // Current date and time
console.log("Today:", today); // Outputs: Today: current date and time

// RegExp: Represents regular expressions.
let pattern = /ab+c/;   // Regular expression pattern
console.log("Pattern:", pattern); // Outputs: Pattern: /ab+c/

// Set: A collection of unique values.
let set = new Set([1, 2, 3, 4, 4]); // Set with unique values (4 appears only once)
console.log("Set:", set); // Outputs: Set: Set { 1, 2, 3, 4 }

// Map: A collection of key-value pairs where keys can be any type.
let map = new Map();
map.set('key', 'value'); // Map with a string key and string value
console.log("Map:", map); // Outputs: Map: Map { 'key' => 'value' }