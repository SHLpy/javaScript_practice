// Select all elements with the class 'button' and store them in a NodeList called 'buttons'
const buttons = document.querySelectorAll('.button');

// Select the 'body' element of the document
const body = document.querySelector('body');

// Select the first 'h1' element in the document
const h1 = document.querySelector('h1');

// Select the first 'h2' element in the document
const h2 = document.querySelector('h2');

// Iterate through each element in the 'buttons' NodeList
buttons.forEach(function (button) {
    // Log the current button element to the console
    console.log(button);

    // Add a 'click' event listener to the current button
    button.addEventListener('click', function(e) {
        // 'e' is the event object containing information about the click event

        // Check if the clicked button's id is 'grey'
        if(e.target.id === 'grey') {
            // Change the background color of the body to grey
            body.style.backgroundColor = e.target.id;

            // Change the text color of 'h1' and 'h2' elements to white
            h1.style.color = 'white';
            h2.style.color = 'white';
        }

        // Check if the clicked button's id is 'white'
        if(e.target.id === 'white') {
            // Change the background color of the body to white
            body.style.backgroundColor = e.target.id;

            // Change the text color of 'h1' and 'h2' elements to blue
            h1.style.color = 'blue';
            h2.style.color = 'blue';
        }

        // Check if the clicked button's id is 'blue'
        if(e.target.id === 'blue') {
            // Change the background color of the body to blue
            body.style.backgroundColor = e.target.id;

            // Change the text color of 'h1' and 'h2' elements to yellow
            h1.style.color = 'yellow';
            h2.style.color = 'yellow';
        }

        // Check if the clicked button's id is 'yellow'
        if(e.target.id === 'yellow') {
            // Change the background color of the body to yellow
            body.style.backgroundColor = e.target.id;

            // Change the text color of 'h1' and 'h2' elements to green
            h1.style.color = 'green';
            h2.style.color = 'green';
        }

        // Check if the clicked button's id is 'green'
        if(e.target.id === 'green') {
            // Change the background color of the body to green
            body.style.backgroundColor = e.target.id;

            // Change the text color of 'h1' and 'h2' elements to gray
            h1.style.color = 'gray';
            h2.style.color = 'gray';
        }
    });
});
