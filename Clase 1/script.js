//Funcion para poner el modo claro
function setLightMode() {
    document.getElementById('theme-stylesheet').setAttribute('href', 'estiloClaro.css');
}

//Funcion para poner el modo oscuro
function setDarkMode() {
    document.getElementById('theme-stylesheet').setAttribute('href', 'estiloOscuro.css');
}

//Función para validar un campo específico
function validateField(field) {
    let value = field.value.trim();
    let errorSpan = field.nextElementSibling; //El <span> de error inmediatamente después del campo
    let fieldType = field.getAttribute('name');

    if (fieldType === 'nombre' || fieldType === 'apellido' || fieldType === 'pais') {
        if (/\d/.test(value) || value === '') {
            errorSpan.style.display = 'inline'; //Muestra el mensaje de error
        } else {
            errorSpan.style.display = 'none'; //Oculta el mensaje de error si es válido
        }
    }

    if (fieldType === 'email') {
        if (!validateEmail(value)) {
            errorSpan.style.display = 'inline'; //Muestra el mensaje de error
        } else {
            errorSpan.style.display = 'none'; //Oculta el mensaje de error si es válido
        }
    }
}

//Función para validar el formato del email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); //Devuelve true si el formato es válido
}

//Evento para manejar el envío del formulario
document.getElementById('myForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var pais = document.getElementById('pais').value.trim();

    //Validaciones finales
    var isNombreValid = !/\d/.test(nombre) && nombre !== '';
    var isApellidoValid = !/\d/.test(apellido) && apellido !== '';
    var isEmailValid = validateEmail(email);
    var isPaisValid = !/\d/.test(pais) && pais !== '';

    //Previene el envío si hay algún error y muestra una alerta
    if (!isNombreValid || !isApellidoValid || !isEmailValid || !isPaisValid) {
        event.preventDefault();
        alert('Por favor, corrige los errores antes de enviar.');
    } else {
        //Muestra un mensaje de éxito si el formulario es válido
        alert('El formulario fue enviado correctamente.');
    }
});

//Llamar a validateField() en eventos de entrada para validación en tiempo real en cada campo
document.getElementById('nombre').addEventListener('input', function() {
    validateField(this);
});
document.getElementById('apellido').addEventListener('input', function() {
    validateField(this);
});
document.getElementById('email').addEventListener('input', function() {
    validateField(this);
});
document.getElementById('pais').addEventListener('input', function() {
    validateField(this);
});