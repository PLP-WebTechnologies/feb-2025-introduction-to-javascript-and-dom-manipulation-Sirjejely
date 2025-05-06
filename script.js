// Function to change the text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('dynamic-text').textContent = 'The text has been changed dynamically!';
});

// Function to add a new element when the button is clicked
document.getElementById('add-element-btn').addEventListener('click', function() {
    // Create a new div element
    const newElement = document.createElement('div');
    newElement.classList.add('new-element');
    newElement.textContent = 'This is a new element added to the DOM!';
    
    // Append the new element to the body
    document.body.appendChild(newElement);
});
