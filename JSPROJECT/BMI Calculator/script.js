// Select the form element from the DOM
const form = document.querySelector('form');

// Add an event listener to the form for the submit event
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the value of height input and parse it to an integer
    const height = parseInt(document.querySelector('#height').value);

    // Get the value of weight input and parse it to an integer
    const weight = parseInt(document.querySelector('#weight').value);

    // Select the results element where the BMI result will be displayed
    const results = document.querySelector('#results');

    // Check if height input is empty, negative, or not a number
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height. You gave ${height}`;
    }
    // Check if weight input is empty, negative, or not a number
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight. You gave ${weight}`;
    } else {
        // Calculate BMI by dividing weight (kg) by the square of height (m)
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let category; // Declare a variable to store the BMI category

        // Determine the BMI category based on the calculated BMI value
        if (bmi < 18.6) {
            category = 'Under Weight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal Range';
        } else {
            category = 'Overweight';
        }

        // Display the BMI value and category in the results element with styling
        results.innerHTML = `<span style="border: 2px solid black; border-radius: 10px; padding: 5px;">BMI is: ${bmi} (${category})</span>`;
    }
});
