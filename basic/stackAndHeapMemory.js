// Stack(Premmetive) and Heap(Non-premetive)
// Call Stack:
// Keeps track of function calls and their execution contexts.
// Operates in a LIFO manner.
// Memory allocation and deallocation are automatic and implicit based on function calls and returns.

let myName = "Sohail Ahmed";

let anotherName = myName;
anotherName = "Sohail Malik";

console.log(myName);      // Output: Sohail Ahmed
console.log(anotherName); // Output: Sohail Malik
//  The reason you get different values for myName 
//  and anotherName is due to how JavaScript handles primitive values and variable assignments.
//  When you do let anotherName = myName;, 
//  you are not making a copy of the string itself. Instead,
//  you are copying the value of myName, 
//  which is the memory address where "Sohail Ahmed" is stored.
//  So, both myName and anotherName initially point to the same memory location containing "Sohail Ahmed".
//  When you reassign anotherName to "Sohail Malik", you're pointing anotherName to a new memory location containing "Sohail Malik". However, this does not affect the value stored at the original memory location referenced by myName.

//  Heap
//  Stores dynamically allocated memory for objects and variables.
//  Managed by the garbage collector to reclaim memory for unused objects.
//  Memory allocation and deallocation are explicit through object creation and removal.

// Object representing a person
let personOne = {
    name: "Sohail",
    age: 23,
    city: "Hyderabad"
};

// Assigning personOne to personTwo
let personTwo = personOne;

// Modifying the name property of personTwo
personTwo.name = "Sohail Malik";

// Output the name property of both personOne and personTwo
console.log(personOne.name); //Output: Sohail Malik
console.log(personTwo.name); //Output: Sohail Malik

//  Both personOne and personTwo have the same name property after the modification because in JavaScript,
//  when you assign an object to another variable, you are actually copying the reference to the same object in memory,
//  not creating a new object.

//  Let's break it down:

//  Initial Object Creation:

//  You create an object personOne with properties name: "Sohail", age: 23, and city: "Hyderabad".
//  Reference Assignment:

//  When you do let personTwo = personOne;, you are not creating a new object. 
//  Instead, you are creating a new variable personTwo that points to the same object in memory as personOne.
//  Both personOne and personTwo now reference the same object in memory.
