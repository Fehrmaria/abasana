// script.js

// Agrega la validación del formulario utilizando JavaScript
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
    // Validación del nombre (debe tener al menos 3 caracteres)
    const nombre = document.getElementById("nombre").value;
    if (nombre.length < 3) {
        document.getElementById("nombreError").textContent = "El nombre debe tener al menos 3 caracteres";
        event.preventDefault();
    } else {
        document.getElementById("nombreError").textContent = "";
    }

    // Agrega validación para otros campos según tus requerimientos
    // ...

    // Validación de términos y condiciones (debe estar marcado)
    if (!document.getElementById("terminos").checked) {
        document.getElementById("terminosError").textContent = "Debes aceptar los términos y condiciones";
        event.preventDefault();
    } else {
        document.getElementById("terminosError").textContent = "";
    }
});
