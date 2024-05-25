// In JavaScript, comparisons are often necessary for conditional statements, loops, and various logic implementations. There are multiple ways to compare values, and it's important to understand how each method works to avoid bugs and unexpected behavior.

// 1. Equality Operators
// There are two main types of equality operators: `==` (loose equality) and `===` (strict equality).

// Loose Equality (`==`)**:
// Checks for equality after performing type conversion if necessary.
// Examples:
   
    console.log(5 == '5'); // true (number and string are converted to the same type)
    console.log(0 == false); // true (0 is falsy in JavaScript)
    console.log(null == undefined); // true (special case)


// Strict Equality (`===`):
// Checks for equality without type conversion. Both the value and the type must be the same.
// Examples:
  
    console.log(5 === '5'); // false (different types)
    console.log(0 === false); // false (different types)
    console.log(null === undefined); // false (different types)
    console.log(5 === 5); // true (same value and type)


// 2. Inequality Operators
// Similar to equality operators, JavaScript has `!=` (loose inequality) and `!==` (strict inequality).

// Loose Inequality (`!=`):
// Compares two values for inequality after type conversion.
// Examples:
  
    console.log(5 != '5'); // false (values are converted to the same type)
    console.log(0 != false); // false (0 is falsy)


//Strict Inequality (`!==`):
//Compares two values for inequality without type conversion.
//Examples:
   
    console.log(5 !== '5'); // true (different types)
    console.log(0 !== false); // true (different types)


// 3. Relational Operators
// These operators compare the relative order of two values.

//Greater than (`>`):

  console.log(10 > 5); // true
  console.log('b' > 'a'); // true (lexicographical comparison)


//Greater than or equal to (`>=`):

  console.log(10 >= 10); // true
  console.log('b' >= 'a'); // true


//Less than (`<`):

  console.log(5 < 10); // true
  console.log('a' < 'b'); // true


//Less than or equal to (`<=`):

  console.log(5 <= 5); // true
  console.log('a' <= 'b'); // true


// 4. Comparing Objects
// Comparing objects is different because objects are reference types. 
//Two objects are equal only if they reference the same memory location.

// Example:

  let obj1 = { name: 'Alice' };
  let obj2 = { name: 'Alice' };
  let obj3 = obj1;

  console.log(obj1 == obj2); // false (different references)
  console.log(obj1 === obj2); // false (different references)
  console.log(obj1 == obj3); // true (same reference)
  console.log(obj1 === obj3); // true (same reference)


// 5. Special Cases
// There are a few special cases in JavaScript comparisons:

//NaN (Not-a-Number):
//NaN` is not equal to anything, including itself.

  console.log(NaN == NaN); // false
  console.log(NaN === NaN); // false
  console.log(isNaN(NaN)); // true (use isNaN function to check for NaN)


//Object and Primitive Comparison**:
// When comparing an object with a primitive, the object is converted to a primitive value (usually by calling its `valueOf` or `toString` method).

  let obj = { valueOf: () => 5 };
  console.log(obj == 5); // true (object is converted to primitive value 5)
  console.log(obj === 5); // false (different types)


//Summary
//Use `===` and `!==` for most comparisons to avoid unintended type coercion.
//Be aware of how JavaScript handles special values like `NaN` and object references.
//Understand relational operators for comparing numbers and strings.
//Always test edge cases to ensure your comparisons behave as expected.

//Understanding these comparison techniques will help you write more reliable and maintainable JavaScript code.