//---------------------------------------------------------------------------------------------------
// 1. for loop
// for (initialization; condition; increment) {
//     // code block to be executed
// }

console.log("for loop example:");

for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}
// Output: 0 1 2 3 4

//---------------------------------------------------------------------------------------------------

// 2. while loop
// while (condition) {
//     // code block to be executed
// }

console.log("while loop example:");

let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++;
}
// Output: 0 1 2 3 4

//---------------------------------------------------------------------------------------------------

// 3. do...while loop
//The do...while loop is similar to the while loop,
// but it will always execute the code block once before checking if the condition is true,
// and then it will repeat the loop as long as the condition is true.
// do {
//     // code block to be executed
// } while (condition);

console.log("do...while loop example:");

let k = 0;
do {
    console.log("do...while loop iteration:", k);
    k++;
} while (k < 5);
// Output: 0 1 2 3 4

//---------------------------------------------------------------------------------------------------

// 4. for...in loop
//The for...in loop is used to iterate over the properties of an object.
// for (variable in object) {
//     // code block to be executed
// }

console.log("for...in loop example:");

const person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
    console.log("for...in loop property:", key, "value:", person[key]);
}
// Output:
// fname: John
// lname: Doe
// age: 25

//---------------------------------------------------------------------------------------------------

// 5. for...of loop
// Used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// for (variable of iterable) {
//     // code block to be executed
// }

console.log("for...of loop example:");

const arr = ['a', 'b', 'c'];
for (let value of arr) {
    console.log("for...of loop value:", value);
}
// Output: a b c

//---------------------------------------------------------------------------------------------------

// Loop control statements

// break statement
// Terminates the loop entirely
console.log("break statement example:");

for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Loop breaks when i is 3
    console.log("break statement iteration:", i);
}
// Output: 0 1 2

//---------------------------------------------------------------------------------------------------

// continue statement
// Skips the rest of the loop iteration and continues with the next iteration
console.log("continue statement example:");

for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // Skip the iteration when i is 3
    console.log("continue statement iteration:", i);
}
// Output: 0 1 2 4

//---------------------------------------------------------------------------------------------------
