// 1. Selecting Elements

// By ID
// const elementById = document.getElementById('myId');

// By Class Name
// const elementsByClassName = document.getElementsByClassName('myClass');

// By Tag Name
// const elementsByTagName = document.getElementsByTagName('div');

// By Query Selector (single element)
// const element = document.querySelector('#myId / .myClass / tag'); // CSS selector

// By Query Selector All (multiple elements)
// const elements = document.querySelectorAll('#myId / .myClass / tag'); // CSS selector

//--------------------------------------------------------------------------------------------------

// 2. Modifying Elements

// Changing Text Content
// const element = document.getElementById('myId');
// element.textContent = 'New Text Content';

// Changing HTML Content
// element.innerHTML = '<p>New HTML Content</p>';

// Changing Attributes
// element.setAttribute('class', 'newClass');
// const className = element.getAttribute('class');

// Changing Styles
// element.style.color = 'red';
// element.style.backgroundColor = 'blue';

//--------------------------------------------------------------------------------------------------

// 3. Creating and Inserting Elements

// Creating a New Element
// const newElement = document.createElement('p');
// newElement.textContent = 'This is a new paragraph.';

// Appending a New Element
// const parentElement = document.getElementById('parentId');
// parentElement.appendChild(newElement);

// Inserting Before a Specific Element
// const referenceElement = document.getElementById('referenceId');
// parentElement.insertBefore(newElement, referenceElement);

// Inserting Adjacent HTML
// referenceElement.insertAdjacentHTML('beforebegin', '<p>Before Begin</p>');
// referenceElement.insertAdjacentHTML('afterbegin', '<p>After Begin</p>');
// referenceElement.insertAdjacentHTML('beforeend', '<p>Before End</p>');
// referenceElement.insertAdjacentHTML('afterend', '<p>After End</p>');

//--------------------------------------------------------------------------------------------------

// 4. Removing Elements

// const elementToRemove = document.getElementById('myId');
// elementToRemove.remove();

//--------------------------------------------------------------------------------------------------

// 5. Cloning Elements

// const originalElement = document.getElementById('myId');
// const clonedElement = originalElement.cloneNode(true); // true for deep clone
// parentElement.appendChild(clonedElement);

//--------------------------------------------------------------------------------------------------

// 6. Event Handling

// Adding Event Listeners
// const button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//     alert('Button clicked!');
// });
// Removing Event Listeners
// const clickHandler = () => {
//     alert('Button clicked!');
// };
// button.addEventListener('click', clickHandler);
// button.removeEventListener('click', clickHandler);

//--------------------------------------------------------------------------------------------------

// 7. Traversing the DOM

// Parent Node
// const childElement = document.getElementById('childId');
// const parentElement = childElement.parentNode;

// Child Nodes
// const parentElement = document.getElementById('parentId');
// const childNodes = parentElement.childNodes;

// First Child
// const firstChild = parentElement.firstChild;

// Last Child
// const lastChild = parentElement.lastChild;

// Next Sibling
// const nextSibling = childElement.nextSibling;

// Previous Sibling
// const previousSibling = childElement.previousSibling;

//--------------------------------------------------------------------------------------------------

// 8. Manipulating Classes

// Adding a Class
// element.classList.add('newClass');

// Removing a Class
// element.classList.remove('oldClass');

// Toggling a Class
// element.classList.toggle('toggleClass');

// Checking for a Class
// const hasClass = element.classList.contains('checkClass');

//--------------------------------------------------------------------------------------------------