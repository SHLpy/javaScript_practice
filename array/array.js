// In JavaScript, arrays are objects with these core characteristics:

// Resizable and Mixed Types: Arrays can grow or shrink in size and hold different data types.
let arr1 = [1, "text", true];


// Not Associative: Elements must be accessed using nonnegative integers, not arbitrary strings.
let arr2 = ["apple", "banana"];
console.log(arr2[0]); // "apple"


// Zero-Indexed: The first element is at index 0, the second at index 1, and so on.
let arr3 = ["apple", "banana"];
console.log(arr3[1]); // "banana"


// Shallow Copies: Copy operations (e.g., `slice`, `concat`) create shallow copies, not deep copies.
let arr4 = [1, [2, 3]];
let shallowCopy = arr4.slice();
console.log(shallowCopy); // [1, [2, 3]]

//some important
const marvel_heros = ["thor","ironman","hulk"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) //output: ["thor","ironman","hulk",["superman","flash","batman"]]

const all_hero = marvel_heros.concat(dc_heros);
console.log(all_hero);//output: ["thor","ironman","hulk","superman","flash","batman"]

const allnewheros =  [...marvel_heros, ...dc_heros]
console.log(marvel_heros)//output: ["thor","ironman","hulk","superman","flash","batman"]

const my_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_array = my_array.flat(Infinity)
console.log(another_array)
//output : 
// [
//     1,2,3,4,5,
//     6,7,6,7,4,
//     5,
// ]

console.log(Array.isArray("sohail")) //output : false
console.log(Array.from("sohail")) //output : ['s','o','h','a','i','l']
console.log(Array.isArray({name : "sohail"})) //output : []   |interesting topic

//-----------------------------------------------------------------------------------------------------------------------------------------

//arrat Methods

// JavaScript arrays come with a variety of built-in methods that make it easy to manipulate and work
// with array elements. Here are some common array methods along with explanations and examples:

// 1. `push()`
// Adds one or more elements to the end of an array and returns the new length of the array.

let fruits1 = ["Apple", "Banana"];
fruits1.push("Cherry");
console.log(fruits1); // Output: ["Apple", "Banana", "Cherry"]

// 2. `pop()`
// Removes the last element from an array and returns that element.
let fruits2 = ["Apple", "Banana", "Cherry"];
let last = fruits2.pop();
console.log(last); // Output: Cherry
console.log(fruits2); // Output: ["Apple", "Banana"]

// 3. `unshift()`
// Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits3 = ["Apple", "Banana"];
fruits3.unshift("Cherry");
console.log(fruits3); // Output: ["Cherry", "Apple", "Banana"]

// 4. `shift()`
// Removes the first element from an array and returns that element.
let fruits4 = ["Apple", "Banana", "Cherry"];
let first = fruits4.shift();
console.log(first); // Output: Apple
console.log(fruits4); // Output: ["Banana", "Cherry"]

// 5. `concat()`
// Merges two or more arrays and returns a new array.
let fruits5 = ["Apple", "Banana"];
let moreFruits = ["Cherry", "Date"];
let allFruits = fruits5.concat(moreFruits);
console.log(allFruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// 6. `slice()`
// Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).
let fruits6 = ["Apple", "Banana", "Cherry", "Date"];
let someFruits = fruits6.slice(1, 3);
console.log(someFruits); // Output: ["Banana", "Cherry"]

// 7. `splice()`
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let fruits7 = ["Apple", "Banana", "Cherry"];
fruits7.splice(1, 1, "Date"); // Removes 1 element at index 1 and adds "Date"
console.log(fruits7); // Output: ["Apple", "Date", "Cherry"]

let someFruits2 =fruits7.splice(1,2)
console.log(someFruits2);// Output: ["Banana", "Cherry"]
console.log(fruits7);//outpu: ["Apple"];

// 8. `indexOf()`
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let fruits8 = ["Apple", "Banana", "Cherry"];
let index2 = fruits8.indexOf("Banana");
console.log(index2); // Output: 1

// 9. `includes()`
// Determines whether an array includes a certain value among its entries, returning `true` or `false`.
let fruits9 = ["Apple", "Banana", "Cherry"];
let hasBanana = fruits9.includes("Banana");
console.log(hasBanana); // Output: true

// 10. `forEach()`
// Executes a provided function once for each array element.
let fruits10 = ["Apple", "Banana", "Cherry"];
fruits10.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// 11. `map()`
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers2 = [1, 2, 3];
let doubled = numbers2.map(function(num) {
    return num * 2;
});
console.log(doubled); // Output: [2, 4, 6]

// 12. `filter()`
// Creates a new array with all elements that pass the test implemented by the provided function.
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// 13. `reduce()`
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let numbers4 = [1, 2, 3, 4];
let sum = numbers4.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum); // Output: 10

// 14. `find()`
// Returns the value of the first element in the provided array that satisfies the provided testing function.

let numbers5 = [1, 2, 3, 4];
let found = numbers5.find(function(num) {
    return num > 2;
});
console.log(found); // Output: 3

// 15. `findIndex()`
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
let numbers6 = [1, 2, 3, 4];
let index = numbers6.findIndex(function(num) {
    return num > 2;
});
console.log(index); // Output: 2

// 16. `sort()`
// Sorts the elements of an array in place and returns the array.
let fruits11 = ["Banana", "Apple", "Cherry"];
fruits11.sort();
console.log(fruits11); // Output: ["Apple", "Banana", "Cherry"]

// 17. `reverse()`
// Reverses the order of the elements in an array in place and returns the array.
let fruits12 = ["Banana", "Apple", "Cherry"];
fruits12.reverse();
console.log(fruits12); // Output: ["Cherry", "Apple", "Banana"]

// 18. `join()`
// Joins all elements of an array into a string and returns this string.
let fruits13 = ["Apple", "Banana", "Cherry"];
let fruitString2 = fruits13.join(", ");
console.log(fruitString2); // Output: "Apple, Banana, Cherry"

// 19. `split()`
// Although not an array method, `split` is often used with strings to convert them into arrays.

let fruitString3 = "Apple, Banana, Cherry";
let fruits14 = fruitString3.split(", ");
console.log(fruits14); // Output: ["Apple", "Banana", "Cherry"]