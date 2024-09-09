//Función para validar un campo específico
function validateField(field) {
    let value = field.value.trim();
    let errorSpan = document.getElementById('error-' + field.id); // Usamos el ID dinámico del campo

    if (field.id === 'name') {
        if (/\d/.test(value) || value === '') {
            errorSpan.style.display = 'inline'; //Muestra el mensaje de error
        } else {
            errorSpan.style.display = 'none'; //Oculta el mensaje de error si es válido
        }
    }

    if (field.id === 'email') {
        if (!validateEmail(value)) {
            errorSpan.style.display = 'inline'; //Muestra el mensaje de error
        } else {
            errorSpan.style.display = 'none'; //Oculta el mensaje de error si es válido
        }
    }

    if (field.id === 'message') {
        if (value === '') {
            errorSpan.style.display = 'inline'; // Muestra el mensaje de error
        } else {
            errorSpan.style.display = 'none'; // Oculta el mensaje de error si es válido
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
    var nombre = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('message').value.trim();

    //Validaciones finales
    var isNombreValid = !/\d/.test(nombre) && nombre !== '';
    var isEmailValid = validateEmail(email);
    var isMensajeValid = mensaje !== '';

    //Previene el envío si hay algún error y muestra una alerta
    if (!isNombreValid || !isEmailValid || !isMensajeValid) {
        event.preventDefault();
        alert('Por favor, corrige los errores antes de enviar.');
    } else {
        //Muestra un mensaje de éxito si el formulario es válido
        alert('El formulario fue enviado correctamente.');
        document.getElementById('myForm').reset(); // Resetea el formulario después de un envío exitoso
    }
});

//Llamar a validateField() en eventos de entrada para validación en tiempo real en cada campo
document.getElementById('name').addEventListener('input', function() {
    validateField(this);
});
document.getElementById('email').addEventListener('input', function() {
    validateField(this);
});
document.getElementById('message').addEventListener('input', function() {
    validateField(this);
});