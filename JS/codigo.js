document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '../HTML/registro.html') {
      // Lógica para el formulario de registro
      var registerForm = document.getElementById('register-form');
      registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        // Aquí puedes implementar la lógica para enviar los datos del formulario al servidor
      });
    }

    
    if (window.location.pathname === '../HTML/login.html') {
      // Lógica para el formulario de inicio de sesión
      var loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        // Aquí puedes implementar la lógica para enviar los datos del formulario al servidor
      });
    }
  });

