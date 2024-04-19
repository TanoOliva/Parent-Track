$(document).ready(function () {
    console.log("signup.js cargado");

  // Se cargan las comunas para la región de Valparaíso
  $("#region").change((e) => {
    if ($("#region").find(":selected").val() === "5") {
      $("#comuna").append('<option value="1">Valparaíso</option>');
      $("#comuna").append('<option value="2">Viña del Mar</option>');
      $("#comuna").append('<option value="3">Concón</option>');
      $("#comuna").append('<option value="4">Quilpué</option>');
      $("#comuna").append('<option value="5">Villa Alemana</option>');
    }
  });
    // Reglas de validación
    $("#signup").validate({
      rules: {
        username: {
          required: true,
          minlength: 2,
        },
        rut: {
          required: true,
          minlength: 9,
          maxlength: 12,
        },
        email: {
          required: true,
          email: true,
        },
        region: {
          required: true,
        },
        comuna: {
          required: true,
        },
        password: {
          required: true,
          minlength: 6,
        },
        "confirm-password": {
          required: true,
          equalTo: "#password",
        },
        tyc: {
          required: true,
        },
      },
      // Mensajes de error
      messages: {
        username: {
          required: "Por favor ingresa tu nombre de usuario",
          minlength: "El nombre de usuario debe tener al menos 2 caracteres",
        },
        rut: {
          required: "Por favor ingresa tu RUT",
          minlength: "El RUT debe tener al menos 9 caracteres",
          maxlength: "El RUT no debe tener más de 12 caracteres",
        },
        email: {
          required: "Por favor ingresa tu correo electrónico",
          email: "Por favor ingresa un correo electrónico válido",
        },
        region: {
          required: "Por favor selecciona tu región",
        },
        
        comuna: {
          required: "Por favor selecciona tu comuna",
        },
        password: {
          required: "Por favor ingresa una contraseña",
          minlength: "La contraseña debe tener al menos 6 caracteres",
        },
        "confirm-password": {
          required: "Por favor confirma tu contraseña",
          equalTo: "Las contraseñas no coinciden",
        },
        tyc: {
          required: "Debes aceptar los términos y condiciones",
        },
      },
      // Manejo del envío del formulario
      submitHandler: function (form) {
        form.submit();
      },
    });
  });