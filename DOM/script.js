// Selecting elements
const title = document.getElementById('title'); // Select element by ID
const description = document.querySelector('.description'); // Select element by class
const container = document.getElementById('container'); // Select element by ID

// Changing text content
document.getElementById('changeText').addEventListener('click', () => {
    title.textContent = 'DOM Manipulated!'; // Change text content
});

// Adding a new element
document.getElementById('addElement').addEventListener('click', () => {
    const newParagraph = document.createElement('p'); // Create new element
    newParagraph.textContent = 'This is a new paragraph.'; // Set text content of new element
    container.appendChild(newParagraph); // Append new element to parent
});

// Removing an element
document.getElementById('removeElement').addEventListener('click', () => {
    if (container.lastChild.tagName === 'P') { // Check if the last child is a paragraph
        container.removeChild(container.lastChild); // Remove child element
    }
});

// Toggling a class
document.getElementById('toggleClass').addEventListener('click', () => {
    description.classList.toggle('highlight'); // Toggle class on element
});