// 1. ISO 8601 Format (YYYY-MM-DDTHH:MM
let date1 = new Date();
let dateString1 = date1.toISOString();
console.log(dateString1); // Output: "2024-05-26T12:00:00.000Z"

// 2. Custom Format (DD-MM-YYYY)
let day2 = date.getDate().toString().padStart(2, '0');
let month2 = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
let year2 = date.getFullYear();
let dateString2 = `${day2}-${month2}-${year2}`;
console.log(dateString2); // Output: "26-05-2024"

// 3. Long Date Format (Day, Month Date, Year)
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let dateString3 = date.toLocaleDateString('en-US', options);
console.log(dateString3); // Output: "Thursday, May 26, 2024"

// 4. Short Date Format (MM/DD/YYYY)
let month3 = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
let day3 = date.getDate().toString().padStart(2, '0');
let year3 = date.getFullYear();
let dateString4 = `${month3}/${day3}/${year3}`;
console.log(dateString4); // Output: "05/26/2024"

// 5. UTC Format

let month4 = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
let day4 = date.getDate().toString().padStart(2, '0');
let year4 = date.getFullYear();
let dateString5 = `${month4}/${day4}/${year4}`;
console.log(dateString5); // Output: "05/26/2024"
