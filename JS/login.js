document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.button:not(.google)');
    const emailInput = document.querySelector('input[type="email"]');

    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        if (!email) {
            alert('Por favor, introduce tu correo electrónico.');
            return;
        }

        // Envía la solicitud al servidor
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Inicio de sesión exitoso!');
                // Redireccionar al dashboard o página principal
                window.location.href = '/dashboard.html';
            } else {
                alert('Error al iniciar sesión. Verifica tu correo electrónico o intenta de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud de inicio de sesión:', error);
            alert('Error en el servidor. Intenta de nuevo más tarde.');
        });
    });

    // Opcional: Manejo de inicio de sesión con Google
    const googleButton = document.querySelector('.button.google');
    googleButton.addEventListener('click', function() {
        // Aquí podrías integrar Google Sign-In por ejemplo
        console.log('Inicio de sesión con Google no implementado.');
    });
});
