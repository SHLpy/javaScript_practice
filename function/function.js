//Function Declaration:
function greet() {
    console.log("Hello!");
}
greet(); // Output: Hello!

// Function With Parameters and With Return:
function multiply(a, b) {
    return a * b;
}
const result = multiply(4, 5);
console.log(result); // Output: 20


// Function With Parameters and Without Return:
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!


// Function Without Parameters and With Return:
function generateRandomNumber() {
    return Math.random();
}
const randomNumber = generateRandomNumber();
console.log(randomNumber); // Output: a random number between 0 and 1


// Function Without Parameters and Without Return:
function greet() {
    console.log("Hello, world!");
}
greet(); // Output: Hello, world!

//----------------------------------------------------------------------------------

// Function Expression:
const greet1 = function() {
    console.log("Hello!");
};
greet1(); // Output: Hello!

//----------------------------------------------------------------------------------

//3. Anonymous Function
let greet2 = function() {
    console.log("Hello!");
};
// Output: "Hello!"
greet2();

//----------------------------------------------------------------------------------

// Arrow Function
let multiply1 = (a, b) => a * b;
// Output: 15
console.log(multiply1(3, 5));

//----------------------------------------------------------------------------------

// Immediately Invoked Function Expression (IIFE)
(() => {
    console.log("I'm invoked immediately!");
})();
// Output: "I'm invoked immediately!"

//----------------------------------------------------------------------------------

// Generator Function
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateSequence();
// Output: 1
console.log(generator.next().value);

//----------------------------------------------------------------------------------

// Recursive Function
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Output: 120 (5!)
console.log(factorial(5));

//----------------------------------------------------------------------------------

// Higher-Order Function
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}
// Output: 10 (2 * 5)
console.log(operateOnNumbers(2, 5, multiply));

//----------------------------------------------------------------------------------

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person = new Person("Alice", 30);
// Output: { name: 'Alice', age: 30 }
console.log(person);

//----------------------------------------------------------------------------------

// Method Function
let anotherPerson = {
    name: "Bob",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
};
// Output: "Hello, Bob!"
anotherPerson.greet();

//----------------------------------------------------------------------------------

//A calculator

function calculator2(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero!";
            } else {
                return num1 / num2;
            }
        default:
            return "Invalid operator";
    }
}
// Test the calculator2 function
console.log(calculator2(5, '+', 3));      // Output: 8
console.log(calculator2(10, '-', 4));     // Output: 6
console.log(calculator2(2, '*', 6));      // Output: 12
console.log(calculator2(8, '/', 2));      // Output: 4
console.log(calculator2(8, '/', 0));      // Output: "Cannot divide by zero!"
console.log(calculator2(8, '%', 2));      // Output: "Invalid operator"


//----------------------------------------------------------------------------------

//calculator using method function

let calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        if (num2 === 0) {
            return "Cannot divide by zero!";
        } else {
            return num1 / num2;
        }
    }
};

// Test the calculator
console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(2, 6));  // Output: 12
console.log(calculator.divide(8, 2));    // Output: 4
console.log(calculator.divide(8, 0));    // Output: "Cannot divide by zero!"
