document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const successCard = document.querySelector('.card-2');
    const successEmail = successCard.querySelector('p span');
    const dismissButton = successCard.querySelector('button');
    const signupCard = document.querySelector('.card');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            showSuccess(email);
        } else {
            showError();
        }
    });

    dismissButton.addEventListener('click', function() {
        hideSuccess();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError() {
        emailInput.classList.add('error');
        errorMessage.style.display = 'block';
    }

    function showSuccess(email) {
        errorMessage.style.display = 'none';
        signupCard.classList.add('hide');
        successCard.classList.remove('hide');
        successEmail.textContent = email;
    }

    function hideSuccess() {
        successCard.classList.add('hide');
        signupCard.classList.remove('hide');
        emailInput.value = '';
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
    }
});

