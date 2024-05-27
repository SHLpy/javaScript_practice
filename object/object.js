// An object in JavaScript is a collection of properties,
// where a property is an association between a key (or name) and a value.
// The value can be a primitive value (like a number or string), another object, or a function.

//Creating Objects

//------------------------------------------------------------------------------------------

//Object Literals
const person1 = {
    firstName: "Sohail",
    lastName: "Ahmed",
    age: 22,
    job: "Developer"
};

// Accessing properties using dot notation
console.log(person1.firstName); // Output: sohail
console.log(person1.lastName);  // Output: Ahmed
console.log(person1.age);       // Output: 22
console.log(person1.job);       // Output: Developer

//------------------------------------------------------------------------------------------

//Using the Object Constructor

const person = new Object();
person.firstName = "Sohail";
person.lastName = "Ahmed";
person.age = 22;
person.job = "Developer";

// Accessing properties using dot notation
console.log(person.firstName); // Output: Sohail
console.log(person.lastName);  // Output: Ahmed
console.log(person.age);       // Output: 22
console.log(person.job);       // Output: Developer

//------------------------------------------------------------------------------------------

// Using a Constructor Function

class Student {
    constructor(firstName, lastName, age, grade, major) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
        this.major = major;
    }
}

// In a constructor function or a class constructor,
// this refers to the new instance of the object being created.
// It is used to assign properties to the newly created object.

// Creating instances of Student
const student1 = new Student("Sohail", "Ahmed", 22, "Senior", "Software Engineering");
const student2 = new Student("Tazeem", "Khan", 21, "Junior", "Electrical Engineering");

// Accessing properties of student1
console.log(student1.firstName); // Output: Sohail
console.log(student1.lastName);  // Output: Ahmed
console.log(student1.age);       // Output: 22
console.log(student1.grade);     // Output: Senior
console.log(student1.major);     // Output: Software Engineering

// Accessing properties of student2
console.log(student2.firstName); // Output: Tazeem
console.log(student2.lastName);  // Output: Khan
console.log(student2.age);       // Output: 21
console.log(student2.grade);     // Output: Junior
console.log(student2.major);     // Output: Electrical Engineering

console.log(person1.job);       // Output: Developer


//------------------------------------------------------------------------------------------

// Dot Notation
console.log(person.firstName); // Output: Sohail
person.age = 22;

// Bracket Notation: Useful when property names are dynamic or not valid identifiers.
console.log(person["lastName"]); // Output: Ahmed
person["job"] = "Senior Developer";

// Methods: Objects can also have methods, which are functions stored as object properties.
const person2 = {
    firstName: "Sohail",
    lastName: "Ahmed",
    age: 22,
    job: "Developer",
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};
person2.greet(); // Output: Hello, my name is Sohail Ahmed

//------------------------------------------------------------------------------------------

// Object Property Shorthand: When the property name and the variable name are the same, you can use shorthand syntax.
const firstName = "Sohail";
const lastName = "Ahmed";
const age = 22;

const person3 = {
    firstName,
    lastName,
    age
};

console.log(person3); // { firstName: "Sohail", lastName: "Ahmed", age: 22 }

//------------------------------------------------------------------------------------------

// Computed Property Names: You can use expressions as property names by enclosing them in square brackets.
const prop = "job";
const person4 = {
    firstName: "Sohail",
    [prop]: "Developer"
};

console.log(person4.job); // Output: Developer

//------------------------------------------------------------------------------------------

// Object Methods: JavaScript provides several built-in methods for objects.
const keys = Object.keys(person);
console.log(keys); // ["firstName", "job"]

const values = Object.values(person);
console.log(values); // ["Sohail", "Developer"]

const entries = Object.entries(person);
console.log(entries); // [["firstName", "Sohail"], ["job", "Developer"]]

const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // This will fail silently or throw an error in strict mode
console.log(obj.prop); // 42


//------------------------------------------------------------------------------------------

// Prototypes and Inheritance: JavaScript objects can inherit properties from another object called the prototype.
// Every JavaScript object has a prototype.
// Prototype Chain: When accessing a property, JavaScript looks up the property in the prototype chain,
//starting from the object itself and moving up to the prototype object until it finds the property or reaches the end of the chain.
const animal = {
    speak: function() {
        console.log("The animal makes a sound");
    }
};

const dog = Object.create(animal);
dog.speak(); // Output: The animal makes a sound