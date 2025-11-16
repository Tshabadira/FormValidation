function validateForm() {
  //Clear previous error message
  document.querySelectorAll('.error').forEach(error => error.textContent = '');
  let isValid = true;

  //Personal Information validation
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const gender = document.getElementById('gender').value;
  const race = document.getElementById('race').value;
  const dob = document.getElementById('dob').value;
  const pob = document.getElementById('pob').value.trim();

  //Account details validation
  const email = document.getElementById('email').value.trim();
  const confirmEmail = document.getElementById('confirmEmail').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  //Validation functions
  // function isValidEmail(email) {
  //     return email !== /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // }
  //Updated this
  function validateEmailInput() {
    const emailInput = document.getElementById('emailInput').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
    }
  }

  function isValidPassword(password) {
    return password === '' || (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  }

  function isValidDate(dateString) {
    if (dateString === '') return true;
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) && date < new Date();
  }

  if (firstName === '') {
    document.getElementById('firstNameError').textContent = "Please enter your name.";
    return false;
  }

  if (lastName === '') {
    document.getElementById('lastNameError').textContent = "Please enter your surname.";
    return false;
  }

  if (gender === '') {
    document.getElementById('genderError').textContent = "Please selecr your gender.";
    return false;
  }

  if (race === '') {
    document.getElementById('raceError').textContent = "Please select your race.";
    return false;
  }

  if (dob && !isValidDate(dob)) {
    document.getElementById('dobError').textContent = 'Valid date of birth is required YYYY-MM-DD';
    isValid = false;
  }

  if (pob === '') {
    document.getElementById('pobError').textContent = "Please enter your place of birth.";
    return false;
  }

  if (password && !isValidPassword(password)) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long including at least 1 uppercase, 1 lowercase, 1 number and 1 special character';
    isValid = false;
  }

  if (password && confirmPassword && password !== confirmPassword){
    document.getElementById('confirmPasswordError').textContent = 'Passwords must match';
      isValid = false;
  }

  //Display submission results
  const output = document.getElementById('output');

  if(isValid){
    document.getElementById('output').innerHTML = `<br>User Information: <br>First name: ${firstName}<br>Last name: ${lastName}<br>Gender: ${gender}<br>Race: ${race}<br>Date of birth: ${dob}<br>Place of birth: ${pob}<br>Email: ${email}<br>Password: ${password.length?'********':''}`;
    return false;
  }else{
    output.style.color = 'red';
    output.textContent = 'Please fix the errors in the form';
    return false;
  }
}

//Clear form
  document.getElementById('registerForm').addEventListener('reset',function(){
    document.querySelectorAll('.error').forEach(error => error.textContent='');
    document.getElementById('output').textContent = '';
  });