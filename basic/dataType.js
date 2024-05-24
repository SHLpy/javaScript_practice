//documentation
//1. ECMA tc39.ec
//2. MDN Web Doc

// Primitive Data Types

//_____________________________________________________

// Number

// Integers and floating-point numbers.
// E42, 3.14, Infinity, NaN

//_____________________________________________________

// String

// Textual data.
// 'Hello', "World", `Template literals`

//_____________________________________________________

// Boolean

// Logical values.
// true, false

//_____________________________________________________

// Undefined

// A declared variable without a value.
// let a;    | a is undefined

//_____________________________________________________

// Null

// Represents no value.
// let b = null;

//_____________________________________________________

// Symbol (ES6)

// Unique and immutable identifiers.
// let sym = Symbol('desc');

//_____________________________________________________

// BigInt (ES2020)

// Arbitrary precision integers
// let bigInt = 12345678901234567890n;

//_____________________________________________________

let intNum = 42;
let floatNum = 3.14;
let infNum = Infinity;
let nanNum= NaN;
console.log('Integer : ',intNum, ' Floating-Point Number : ', floatNum, ' Infinity : ',infNum, ' Not-a-Number : ',nanNum)

let str1 = 'Hello'
let str2 = "World"
let str3 = `Template literals`;
console.log('Single quotes: ', str1, '| double quotes: ', str2, '|Template Literal: ', str3);

let isTrue = true; // Boolean true
let isFalse = false; // Boolean false
console.log('Boolean Examples:', isTrue, isFalse);


let a; // Undefined variable
console.log('Undefined Example:', a);

let b = null; // Null value
console.log('Null Example:', b);

let sym = Symbol('desc'); // Symbol with description
console.log('Symbol Example:', sym);

let bigInt = 12345678901234567890n; // BigInt value
console.log('BigInt Example:', bigInt);