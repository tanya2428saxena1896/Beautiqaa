// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you shortly.`);
        // Optionally, you can reset the form here
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
