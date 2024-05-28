// Declaration of variables
let x = 7;
let y = 15;
let day = 3;
let age = 25;
let hasLicense = true;
let result;

//--------------------------------------------------------------------------------------------------

// 1. if statement
// Checks if 'x' is greater than 5
if (x > 5) {
    console.log("x is greater than 5"); // Executes if the condition is true
}
// Output: x is greater than 5

//--------------------------------------------------------------------------------------------------

// 2. else statement
// Checks if 'x' is greater than 10, otherwise executes the else block
if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is not greater than 10"); // Executes because 'x' is not greater than 10
}
// Output: x is not greater than 10

//--------------------------------------------------------------------------------------------------

// 3. else if statement
// Checks multiple conditions in sequence
if (x > 10) {
    console.log("x is greater than 10");
} else if (x > 5) {
    console.log("x is greater than 5 but less than or equal to 10"); // Executes because 'x' is 7
} else {
    console.log("x is 5 or less");
}
// Output: x is greater than 5 but less than or equal to 10

//--------------------------------------------------------------------------------------------------

// 4. switch statement
// Uses 'switch' to execute different blocks of code based on the value of 'day'
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday"; // Executes because 'day' is 3
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);
// Output: Wednesday

//--------------------------------------------------------------------------------------------------

// 5. Nested if statements
// Checks if 'y' is between 10 and 20
if (y > 10) {
    if (y < 20) {
        console.log("y is between 10 and 20"); // Executes because 'y' is 15
    }
}
// Output: y is between 10 and 20

//--------------------------------------------------------------------------------------------------

// 6. Ternary operator
// Shorthand for if-else, checks if 'age' is 18 or older
result = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(result);
// Output: Yes, can vote

//--------------------------------------------------------------------------------------------------

// 7. Logical operators
// Combines multiple conditions using logical AND (&&) and OR (||)
if (age >= 18 && hasLicense) {
    console.log("Can drive"); // Executes because both conditions are true
} else {
    console.log("Cannot drive");
}
// Output: Can drive

//--------------------------------------------------------------------------------------------------

// 8. try...catch statement
// Handles errors using try...catch
try {
    // Attempting to call a non-existent function, which will throw an error
    let result = someNonExistentFunction();
} catch (error) {
    console.error("Error caught:", error.message); // Catches and logs the error message
} finally {
    console.log("This will always execute, error or not."); // Always executes
}
// Output: Error caught: someNonExistentFunction is not defined
//         This will always execute, error or not.

//--------------------------------------------------------------------------------------------------

// 9. Break statement
// Exits the loop when 'i' equals 3
console.log("break statement example:");
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Loop exits here
    console.log("break statement iteration:", i);
}
// Output: break statement iteration: 0
//         break statement iteration: 1
//         break statement iteration: 2

//--------------------------------------------------------------------------------------------------

// 10. Continue statement
// Skips the current iteration when 'i' equals 3 and continues with the next iteration
console.log("continue statement example:");
for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // Loop skips this iteration
    console.log("continue statement iteration:", i);
}
// Output: continue statement iteration: 0
//         continue statement iteration: 1
//         continue statement iteration: 2
//         continue statement iteration: 4

//--------------------------------------------------------------------------------------------------

// 11. Empty statement
// Using an empty statement in a loop
for (let i = 0; i < 5; i++) {
    ; // Do nothing
    console.log("empty statement iteration:", i);
}
// Output: empty statement iteration: 0
//         empty statement iteration: 1
//         empty statement iteration: 2
//         empty statement iteration: 3
//         empty statement iteration: 4

//--------------------------------------------------------------------------------------------------
