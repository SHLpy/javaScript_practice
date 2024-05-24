// Explicit Conversion

// String to Number
//Using Number()
let strToNum1 = Number("123");
//Using parseInt() for integers
let strToNum2 = parseInt("123", 10);
//Using parseFloat() for floating-point numbers
let strToNum3 = parseFloat("123.45");
console.log("String to Number:", strToNum1, strToNum2, strToNum3);// 123 123 123.45

// Number to String
//Using String()
let numToStr1 = String(123);
//Using toString() method
let numToStr2 = (123).toString();
console.log("Number to String:", numToStr1, numToStr2); // "123" "123"

// Boolean to String
//Using String()
let boolToStr1 = String(true);
//Using toString() method
let boolToStr2 = true.toString();
console.log("Boolean to String:", boolToStr1, boolToStr2);// "true" "true"

// String to Boolean
let str = "true";
let strToBool = (str === "true");
console.log("String to Boolean:", strToBool);// true

// Object to JSON String
//Using JSON.stringify()
let obj = {name: "John", age: 30};
let objToJsonStr = JSON.stringify(obj);
console.log("Object to JSON String:", objToJsonStr);// '{"name":"John","age":30}'

// JSON String to Object
//Using JSON.parse()
let jsonStr = '{"name":"John","age":30}';
let jsonToObj = JSON.parse(jsonStr);
console.log("JSON String to Object:", jsonToObj);// {name: "John", age: 30}

// Date to Number
//Using getTime() method
let date = new Date();
let dateToNum = date.getTime();
console.log("Date to Number:", dateToNum);// e.g., 1621609860574

// Number to Date
//Using Date() constructor
let numToDate = new Date(1621609860574);
console.log("Number to Date:", numToDate);// Date object representing the timestamp

// Array to String
//Using join() method
let arrToStr = [1, 2, 3].join(", ");
console.log("Array to String:", arrToStr);// "1, 2, 3"

// String to Array
//Using split() method
let strToArr = "1, 2, 3".split(", ");
console.log("String to Array:", strToArr);// [1, 2, 3]


// Unary Plus (+) Operator
str = "123";
let unaryPlus = +str; // 123
console.log(unaryPlus);

// Unary Negation (-) Operator
str = "123";
let unaryNeg = -str; // -123
console.log(unaryNeg);

// Double Negation (!!) Operator
str = "hello";
let doubleNeg = !!str; // true
console.log(doubleNeg);

// Template Literals
num = 123;
let templateLiteral = `Number is ${num}`; // "Number is 123"
console.log(templateLiteral);


// Implicit Conversion (Type Coercion)
console.log("Implicit Conversion:");
console.log(1 + "2"); // "12" (number to string)
console.log("5" - 2); // 3 (string to number)
console.log("5" * 2); // 10 (string to number)
console.log("5" / 2); // 2.5 (string to number)
console.log(!!"hello"); // true (non-empty string to boolean)
console.log(!!0); // false (number to boolean)












