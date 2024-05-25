//Creating a Date Object
// Create a new Date object with the current date and time
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time in the local time zone

// Create a new Date object with a specific date and time
let specificDate = new Date("2024-05-26T12:00:00");
console.log(specificDate); // Output: Wed May 26 2024 12:00:00 GMT+0000 (Coordinated Universal Time)

// Create a new Date object with specific year, month, day, hour, minute, and second values
let customDate = new Date(2024, 4, 26, 12, 0, 0); // Months are zero-based (0 for January, 11 for December)
console.log(customDate); // Output: Wed May 26 2024 12:00:00 GMT+0000 (Coordinated Universal Time)

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Getting Date and Time Components

let date = new Date();

// Get the current year, month, day, hour, minute, and second
let year = date.getFullYear();
let month = date.getMonth(); // Month (0-11)
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let millisecond = date.getMilliseconds();

// Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
let dayOfWeek = date.getDay();

console.log(year, month, day, hour, minute, second, millisecond, dayOfWeek); // Output: Current date and time components

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Formating dates and Times

// Using toLocaleString() to format date and time based on the user's locale
console.log(date.toLocaleString());

// Constructing a custom date string
let customDateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(customDateString); // Output: Custom date string in the format "YYYY-MM-DD HH:MM:SS"

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Manipulating Dates and Times

// Adding or subtracting days from a date
date.setDate(date.getDate() + 7);

// Setting a specific date and time
date.setFullYear(2025);
date.setMonth(6); // Month is zero-based (0 for January, 11 for December)
date.setDate(15);
date.setHours(14);
date.setMinutes(30);
date.setSeconds(0);

console.log(date); // Output: Updated date object with modified components

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Working with Timestamps

// Get the timestamp (number of milliseconds since January 1, 1970)
let timestamp = date.getTime();
console.log(timestamp); // Output: Number of milliseconds since January 1, 1970

//-----------------------------------------------------------------------------------------------------------------------
