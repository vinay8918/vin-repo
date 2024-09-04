document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!name || !email || !password) {
            message.textContent = 'All fields are required!';
            return;
        }

        if (!validateEmail(email)) {
            message.textContent = 'Invalid email format!';
            return;
        }

        message.textContent = ''; // Clear any previous messages
        alert('Registration successful!');
        // Here you can add code to send the data to a server
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
