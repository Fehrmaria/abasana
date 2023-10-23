document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío normal del formulario

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Realiza una solicitud AJAX al servidor para enviar el correo
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "procesar_formulario.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Maneja la respuesta del servidor
            var respuesta = xhr.responseText;
            alert(respuesta); // Puedes mostrar un mensaje en el cliente
        }
    };

    var data = "nombre=" + encodeURIComponent(nombre) + "&email=" + encodeURIComponent(email) + "&mensaje=" + encodeURIComponent(mensaje);
    xhr.send(data);
});

