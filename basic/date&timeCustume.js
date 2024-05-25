// 1. Current Date and Time
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time in the local time zone

// 2. Specific Date and Time
let specificDate = new Date("2024-05-26T12:00:00");
console.log(specificDate); // Output: Wed May 26 2024 12:00:00 GMT+0000 (Coordinated Universal Time)

// 3. Custom Date and Time
let customDate = new Date(2024, 4, 26, 12, 0, 0);
console.log(customDate); // Output: Wed May 26 2024 12:00:00 GMT+0000 (Coordinated Universal Time)

// 4. Timestamp (Number of Milliseconds Since Epoch)
let timestampDate = new Date(1622012400000);
console.log(timestampDate); // Output: Wed May 26 2021 12:00:00 GMT+0000 (Coordinated Universal Time)

// 5. ISO 8601 Date String
let isoDateString = new Date("2024-05-26");
console.log(isoDateString); // Output: Sat May 25 2024 17:00:00 GMT-0700 (Pacific Daylight Time)

// 6. Long Date Format
let longDateString = new Date("May 26, 2024");
console.log(longDateString); // Output: Sat May 26 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// 7. Short Date Format
let shortDateString = new Date("05/26/2024");
console.log(shortDateString); // Output: Sat May 26 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// 8. UTC Date
let utcDate = new Date("Thu, 26 May 2024 12:00:00 GMT");
console.log(utcDate); // Output: Thu May 26 2024 12:00:00 GMT+0000 (Coordinated Universal Time)