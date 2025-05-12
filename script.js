document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Reset previous error messages
        resetErrorMessages();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        
        // Name validation
        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }
        
        // Email validation
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Message validation
        if (message === '') {
            showError('messageError', 'Feedback message is required');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            showSuccessMessage();
            // In a real application, you would submit the form data to a server here
            feedbackForm.reset();
        }
    });
    
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function resetErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(element) {
            element.textContent = '';
            element.style.display = 'none';
        });
        
        // Hide success message if it's showing
        document.getElementById('successMessage').style.display = 'none';
    }
    
    function isValidEmail(email) {
        // Simple email validation - checks for @ and a domain
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showSuccessMessage() {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Thank you for your feedback!';
        successMessage.style.display = 'block';
    }
});