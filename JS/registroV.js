// Función para validar el dígito verificador de un RUT chileno
function validaDV(rut) {
    const [numero, dv] = rut.replace("-K", "-k").split("-");
  
    const dvVer = ((T) => {
      let M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    })(numero);
  
    return dvVer == dv;
  }
  
  // Se agregan las reglas personalizadas al plugin jQuery Validation
  $.validator.addMethod(
    "rut",
    function (value, element) {
      return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
    },
    "El RUT ingresado es inválido"
  );
  
  $.validator.addMethod(
    "rutdv",
    function (value, element) {
      return this.optional(element) || validaDV(value);
    },
    "El dígito verificador del RUT es inválido"
  );
  
  $(document).ready(() => {
    console.log("registroV.js cargado");
  
    const regionValparaisoComunas = {
      "5": [
        { value: "1", text: "Valparaíso" },
        { value: "2", text: "Viña del Mar" },
        { value: "3", text: "Concón" },
        { value: "4", text: "Quilpué" },
        { value: "5", text: "Villa Alemana" }
      ]
    };
  
    $("#region").change((e) => {
      const selectedRegion = $("#region").val();
      const comunas = regionValparaisoComunas[selectedRegion] || [];
  
      const comunaSelect = $("#comuna");
      comunaSelect.empty(); // Limpia las opciones anteriores
  
      comunas.forEach((comuna) => {
        comunaSelect.append(`<option value="${comuna.value}">${comuna.text}</option>`);
      });
    });
  
    // Se inicia la validación del formulario usando jQuery Validator
    $("#signup").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
        "confirm-password": {
          required: true,
          equalTo: "#password",
        },
        rut: {
          required: true,
          rut: true,
          rutdv: true,
        },
        tyc: {
          required: true,
        },
      },
      messages: {
        email: {
          required: "El email es obligatorio",
          email: "El email no es válido",
        },
        password: {
          required: "La contraseña es obligatoria",
        },
        rut: {
          required: "El RUT es requerido",
          rut: "Formato: Sin puntos, con guión",
          rutdv: "El dígito verificador no es válido",
        },
        "confirm-password": {
          required: "La confirmación de contraseña es requerida",
          equalTo: "Las contraseñas deben coincidir",
        },
        tyc: {
          required: "Debe aceptar los términos y condiciones",
        },
      },
      submitHandler: () => {
        // Aquí se puede realizar alguna acción al enviar el formulario
        const email = $("#email").val();
        const password = $("#password").val();
        console.table({ email, password });
      },
    });
  });