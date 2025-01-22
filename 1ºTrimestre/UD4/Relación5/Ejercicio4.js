document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error messages
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(error => error.textContent = '');

  let valid = true;

  // Validation
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const terms = document.getElementById('terms');

  if (!firstName.value) {
    document.getElementById('firstNameError').textContent = 'First name is required';
    firstName.classList.add('error');
    valid = false;
  } else {
    firstName.classList.remove('error');
  }

  if (!lastName.value) {
    document.getElementById('lastNameError').textContent = 'Last name is required';
    lastName.classList.add('error');
    valid = false;
  } else {
    lastName.classList.remove('error');
  }

  if (!phone.value.match(/^\d{10}$/)) {
    document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
    phone.classList.add('error');
    valid = false;
  } else {
    phone.classList.remove('error');
  }

  if (!email.value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    email.classList.add('error');
    valid = false;
  } else {
    email.classList.remove('error');
  }

  if (password.value.length < 8) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
    password.classList.add('error');
    valid = false;
  } else {
    password.classList.remove('error');
  }

  if (confirmPassword.value !== password.value) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    confirmPassword.classList.add('error');
    valid = false;
  } else {
    confirmPassword.classList.remove('error');
  }

  if (!terms.checked) {
    alert('You must agree to the Terms, Privacy Policy and Fees');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});
