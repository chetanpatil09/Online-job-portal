document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error elements
    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");

    // Reset errors
    fullnameError.classList.add("hidden");
    emailError.classList.add("hidden");
    passwordError.classList.add("hidden");
    confirmPasswordError.classList.add("hidden");
    successMessage.classList.add("hidden");

    let valid = true;

    if (fullname === "") {
      fullnameError.classList.remove("hidden");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.classList.remove("hidden");
      valid = false;
    }

    if (password.length < 6) {
      passwordError.classList.remove("hidden");
      valid = false;
    }

    if (password !== confirmPassword) {
      confirmPasswordError.classList.remove("hidden");
      valid = false;
    }

    if (valid) {
      // Save the user data to localStorage
      localStorage.setItem('registeredEmail', email);
      localStorage.setItem('registeredPassword', password);

      // Show success message
      successMessage.classList.remove("hidden");

      // Optionally clear the form
      document.getElementById("registerForm").reset();

      // Redirect to login page after registration
      setTimeout(function() {
        window.location.href = "login.html"; // Redirect to login page
      }, 1500);
    }
});
