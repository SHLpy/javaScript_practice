// In JavaScript, `Math` and `Number` are two built-in objects 
// that provide a range of properties and methods for performing mathematical operations and handling numeric values.
//  The `Math` Object

// The `Math` object contains various properties and methods for mathematical constants and functions. It is not a constructor, so you cannot create instances of it. All properties and methods of `Math` are static.

//  Common Properties

//Math.PI: The value of π (approximately 3.14159).
console.log(Math.PI); // 3.141592653589793


//  Common Methods

// Math.abs(x): Returns the absolute value of a number.
console.log(Math.abs(-5)); // 5


// Math.ceil(x): Rounds a number up to the next largest integer.
console.log(Math.ceil(4.2)); // 5

// Math.floor(x): Rounds a number down to the largest integer less than or equal to the given number.
console.log(Math.floor(4.8)); // 4


//Math.round(x): Rounds a number to the nearest integer.
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

//Math.max(...values): Returns the largest of zero or more numbers.
console.log(Math.min(1, 2, 3, 4, 5)); // 1

//Math.min(...values): Returns the smallest of zero or more numbers.
console.log(Math.min(1, 2, 3, 4, 5)); // 1


// Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // e.g., 0.123456789

// Multiplying the random value by 10 scales the range to be between 0 (inclusive) and 10 (exclusive).
let randomValue = 0.5488135039273248; // Assume this is a randomly generated value between 0 and 1
let scaledValue = randomValue * 10; // To scale the random value to a range between 0 and 10, we multiply it by 10.
// For example, if randomValue is 0.5488135039273248, then scaledValue will be 0.5488135039273248 * 10 = 5.488135039273248.

// integer between 1 and 10 (inclusive)
console.log(Math.floor((Math.random() * 10) + 1)); // Generates ane.g., 5

const min = 10;  // Define the minimum value
const max = 20;  // Define the maximum value
// Generate a random integer between min (inclusive) and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Adding 1 shifts the range to be between 1 (inclusive) and 11 (exclusive).
let finalValue = scaledValue + 1; // e.g., 5.488135039273248 + 1 = 6.488135039273248

// The final result is logged to the console. This value will be a floating-point number between 1 and 11 (but never 11).
console.log(finalValue); // e.g., 6.488135039273248


// Math.sqrt(x): Returns the square root of a number.
console.log(Math.sqrt(16)); // 4


//Math.pow(base, exponent): Returns the base to the exponent power, i.e., base^exponent.
console.log(Math.pow(2, 3)); // 8


//Math.trunc(x): Returns the integer part of a number by removing any fractional digits.
console.log(Math.trunc(4.9)); // 4


//----------------------------------------------------------------------------------------------------

//  The `Number` Object
// The `Number` object is a wrapper object allowing you to work with numerical values.
// A `Number` object is created using the `Number()` constructor.

//Using the Number() Constructor
let num1 = new Number(42); // Creating a Number object with value 42

//Directly Assigning Numeric Values
let num2 = 42; // Assigning a numeric value directly to a variable



// Common Properties

//Number.MAX_VALUE: The largest positive representable number.
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308


// Number.MIN_VALUE: The smallest positive representable number (closest to zero).
console.log(Number.MIN_VALUE); // 5e-324


// Number.NaN: Represents "Not-a-Number" value.
console.log(Number.NaN); // NaN

// Number.POSITIVE_INFINITY: Represents positive infinity.
console.log(Number.POSITIVE_INFINITY); // Infinity

// Number.NEGATIVE_INFINITY: Represents negative infinity.
console.log(Number.NEGATIVE_INFINITY); // -Infinity


//  Common Methods
// Number.isNaN(value): Determines whether the passed value is NaN.

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false


// Number.isFinite(value): Determines whether the passed value is a finite number.

console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false


// Number.isInteger(value): Determines whether the passed value is an integer.

console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.4)); // false

console.log(Number.parseFloat("3.14")); // Output: 3.14

let num = 42.5678;

// toString(): Converts a number to a string.
let numString = num.toString();
console.log(numString); // Output: "42.5678"

// toFixed(): Formats a number using fixed-point notation, rounding to a specified number of decimal places.
let formattedNumFixed = num.toFixed(2);
console.log(formattedNumFixed); // Output: "42.57" (rounded to 2 decimal places)

// toPrecision(): Formats a number to a specified precision in decimal notation.
let formattedNumPrecision = num.toPrecision(4);
console.log(formattedNumPrecision); // Output: "42.57" (precision of 4)

// toLocaleString(): Returns a string representation of a number formatted according to the locale and options specified by the user's operating system.
const hundred = 100000000;
console.log(hundred.toLocaleString())// Output: "1,000,000"

// toLocaleString('en-IN'): Returns a string representation of a number formatted according to the specified locale ('en-IN' for English - India).
const hundred1 = 100000000;
console.log(hundred1.toLocaleString('en-IN')); // Output: "10,00,000"