// Get reference to the HTML element with ID 'clock'
const clock = document.getElementById('clock');
// Get reference to the HTML element with ID 'date'
const dateElement = document.getElementById('date');

// Update the date element with the current date
// This function will execute every second (1000 milliseconds)
setInterval(function () {
    // Create a new Date object to get the current date and time
    let date = new Date();
    // Define options for formatting the date string
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Format the date into a string with the specified options
    let dateString = date.toLocaleDateString(undefined, options);
    // Update the inner HTML of the date element with the formatted date string
    dateElement.innerHTML = dateString;
});

// Update the clock element with the current time
// This function will execute every second (1000 milliseconds)
setInterval(function () {
    // Create a new Date object to get the current date and time
    let date = new Date();
    // Format the time into a string using the default locale settings
    let timeString = date.toLocaleTimeString();
    // Update the inner HTML of the clock element with the formatted time string
    clock.innerHTML = timeString;
}, 1000);