$(document).ready(function () {
    console.log("signup.js cargado");

  // Se cargan las comunas para la región de Valparaíso
  $("#region").change((e) => {

    var region = $("#region").find(":selected").val();
    $("#comuna").empty();

    switch (region) {
      case "1": // Región de Tarapacá
        $("#comuna").append('<option value="1">Iquique</option>');
        $("#comuna").append('<option value="2">Alto Hospicio</option>');
        $("#comuna").append('<option value="3">Pozo Almonte</option>');
        $("#comuna").append('<option value="4">Camiña</option>');
        $("#comuna").append('<option value="5">Colchane</option>');
        $("#comuna").append('<option value="6">Huara</option>');
        $("#comuna").append('<option value="7">Pica</option>');
        break;
      case "2": // Región de Antofagasta
        $("#comuna").append('<option value="8">Antofagasta</option>');
        $("#comuna").append('<option value="9">Mejillones</option>');
        $("#comuna").append('<option value="10">Sierra Gorda</option>');
        $("#comuna").append('<option value="11">Taltal</option>');
        $("#comuna").append('<option value="12">Calama</option>');
        $("#comuna").append('<option value="13">Ollagüe</option>');
        $("#comuna").append('<option value="14">San Pedro de Atacama</option>');
        break;
      case "3": // Región de Atacama
        $("#comuna").append('<option value="15">Copiapó</option>');
        $("#comuna").append('<option value="16">Caldera</option>');
        $("#comuna").append('<option value="17">Tierra Amarilla</option>');
        $("#comuna").append('<option value="18">Chañaral</option>');
        $("#comuna").append('<option value="19">Diego de Almagro</option>');
        $("#comuna").append('<option value="20">Vallenar</option>');
        $("#comuna").append('<option value="21">Alto del Carmen</option>');
        $("#comuna").append('<option value="22">Freirina</option>');
        $("#comuna").append('<option value="23">Huasco</option>');
        break;
      case "4": // Región de Coquimbo
        $("#comuna").append('<option value="24">La Serena</option>');
        $("#comuna").append('<option value="25">Coquimbo</option>');
        $("#comuna").append('<option value="26">Andacollo</option>');
        $("#comuna").append('<option value="27">La Higuera</option>');
        $("#comuna").append('<option value="28">Paihuano</option>');
        $("#comuna").append('<option value="29">Vicuña</option>');
        $("#comuna").append('<option value="30">Illapel</option>');
        $("#comuna").append('<option value="31">Canela</option>');
        $("#comuna").append('<option value="32">Los Vilos</option>');
        $("#comuna").append('<option value="33">Salamanca</option>');
        $("#comuna").append('<option value="34">Ovalle</option>');
        $("#comuna").append('<option value="35">Combarbalá</option>');
        $("#comuna").append('<option value="36">Monte Patria</option>');
        $("#comuna").append('<option value="37">Punitaqui</option>');
        $("#comuna").append('<option value="38">Río Hurtado</option>');
        break;
      case "5": // Región de Valparaíso
        $("#comuna").append('<option value="39">Valparaíso</option>');
        $("#comuna").append('<option value="40">Viña del Mar</option>');
        $("#comuna").append('<option value="41">Concón</option>');
        $("#comuna").append('<option value="42">Quilpué</option>');
        $("#comuna").append('<option value="43">Villa Alemana</option>');
        $("#comuna").append('<option value="44">Quillota</option>');
        $("#comuna").append('<option value="45">La Calera</option>');
        $("#comuna").append('<option value="46">La Cruz</option>');
        $("#comuna").append('<option value="47">Limache</option>');
        $("#comuna").append('<option value="48">Los Andes</option>');
        $("#comuna").append('<option value="49">San Esteban</option>');
        $("#comuna").append('<option value="50">Cabildo</option>');
        $("#comuna").append('<option value="51">Calera</option>');
        $("#comuna").append('<option value="52">Hijuelas</option>');
        $("#comuna").append('<option value="53">La Ligua</option>');
        $("#comuna").append('<option value="54">Petorca</option>');
        $("#comuna").append('<option value="55">Puchuncaví</option>');
        $("#comuna").append('<option value="56">Quintero</option>');
        $("#comuna").append('<option value="57">Zapallar</option>');
        $("#comuna").append('<option value="58">Algarrobo</option>');
        $("#comuna").append('<option value="59">Cartagena</option>');
        $("#comuna").append('<option value="60">El Quisco</option>');
        $("#comuna").append('<option value="61">El Tabo</option>');
        $("#comuna").append('<option value="62">San Antonio</option>');
        $("#comuna").append('<option value="63">Santo Domingo</option>');
        $("#comuna").append('<option value="64">Catemu</option>');
        $("#comuna").append('<option value="65">Llay Llay</option>');
        $("#comuna").append('<option value="66">Panquehue</option>');
        $("#comuna").append('<option value="67">Putaendo</option>');
        $("#comuna").append('<option value="68">Santa María</option>');
        $("#comuna").append('<option value="69">Casablanca</option>');
        $("#comuna").append('<option value="70">Concón</option>');
        $("#comuna").append('<option value="71">Juan Fernández</option>');
        $("#comuna").append('<option value="72">San Felipe</option>');
        $("#comuna").append('<option value="73">Catemu</option>');
        $("#comuna").append('<option value="74">Llaillay</option>');
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