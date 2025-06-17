document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Retrieve saved credentials from localStorage
    const savedEmail = localStorage.getItem('registeredEmail');
    const savedPassword = localStorage.getItem('registeredPassword');
  
    // Check if email and password match the saved values
    if (email === savedEmail && password === savedPassword) {
      // Redirect to homepage after successful login
      window.location.href = 'home.html'; // Replace with actual homepage URL
    } else {
      alert('Invalid email or password');
    }
  });
 