// Single, Double, and Backticks
//------------------------------------------------------------------------------------------------------------
// Single Quotes and Double Quotes:
// Use single quotes or double quotes based on preference or to avoid escaping quotes within the string.
let str1 = 'He said, "JavaScript is awesome!"';
let str2 = "It's a beautiful day!";
console.log(str1,str2)

//------------------------------------------------------------------------------------------------------------

// Template Literals (Backticks):
// Use backticks when you need to include variables or expressions inside a string.
// Useful for multi-line strings without needing concatenation or escape characters.
let user = "Sohail";
let age = 23;
let message = `User ${user} is ${age} years old.`;
console.log(message); // Output: User Sohail is 23 years old.
console.log(`My name is ${user} and my age is ${age}`); // Output: My name is Sohail and my age is 23

//------------------------------------------------------------------------------------------------------------

// Escaping Characters in Strings
// When you need to include special characters in a string,
// such as quotes or backslashes, you use the backslash (\) as an escape character.

// Using backslashes to escape single quotes
let escapedSingleQuote = 'It\'s a nice day.';
console.log(escapedSingleQuote); // Output: It's a nice day.

// Using backslashes to escape double quotes
let escapedDoubleQuote = "He said, \"Hello!\"";
console.log(escapedDoubleQuote); // Output: He said, "Hello!"

// Using backslashes to escape backticks inside template literals
let escapedBacktick = `This is a \`template literal\``;
console.log(escapedBacktick); // Output: This is a `template literal`

//------------------------------------------------------------------------------------------------------------

// String Concatenation
// You can concatenate (combine) strings using the + operator or template literals.

let greeting = "Hello, ";
let name = "Alice";

// Concatenation using +
let message1 = greeting + name + "!"; // "Hello, Alice!"

console.log(` message1 ${message1}`)

// Concatenation using template literals (backticks)
let messageTemplateLiteral = `${greeting}${name}!`; // "Hello, Alice!"
console.log(`messageTemplateLiterals ${messageTemplateLiteral}`)

//------------------------------------------------------------------------------------------------------------

// String Methods
// JavaScript provides many built-in methods to work with strings. Here are some common ones:

// Length: Get the length of a string (number of characters).
let str = "Hello, World!";
console.log(str.length); // 13

// Indexing: Access characters in a string by their index (position).
// Indexing starts from 0
console.log(str[0]); // "H"
console.log(str.charAt(0)); // "H"

// Slice: Extract a part of a string from a start index to an end index (not included).
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-6)); // "World!"

// Substring: Similar to slice, but cannot accept negative indices.
console.log(str.substring(0, 5)); // "Hello"

// Replace: Replace a part of a string with another string.
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

// ToUpperCase and ToLowerCase: Convert a string to upper or lower case.
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"

// Trim: Remove whitespace from both sides of a string.
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // "Hello, World!"

// Split: Split a string into an array of substrings based on a delimiter.
let csv = "one,two,three";
console.log(csv.split(",")); // ["one", "two", "three"]

// Includes: Check if a string contains a specific substring.
console.log(str.includes("World")); // true

// StartsWith and EndsWith: Check if a string starts or ends with a specific substring.
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

//------------------------------------------------------------------------------------------------------------