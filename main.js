function validarFormulario(evento) {
    var formulario = evento.target;
    var campos = formulario.querySelectorAll("[required]");
    var correcto = true;
    var i;
    var campo;
    var mensaje;
    var contrasena;
    var confirmar;
    var run;

    evento.preventDefault();

    for (i = 0; i < campos.length; i++) {
        campo = campos[i];
        mensaje = campo.parentElement.querySelector(".error-campo");
        if (campo.value.trim() === "") {
            if (mensaje) mensaje.textContent = "Este campo es obligatorio.";
            campo.classList.add("is-invalid");
            correcto = false;
        } else {
            if (mensaje) mensaje.textContent = "";
            campo.classList.remove("is-invalid");
        }
    }

    contrasena = formulario.querySelector("input[name='clave'], input[name='contrasena']");
    confirmar = formulario.querySelector("input[name='confirmarClave']");
    if (contrasena && contrasena.value !== "" && (contrasena.value.length < 4 || contrasena.value.length > 10)) {
        contrasena.parentElement.querySelector(".error-campo").textContent = "Usa entre 4 y 10 caracteres.";
        correcto = false;
    }
    if (confirmar && confirmar.value !== contrasena.value) {
        confirmar.parentElement.querySelector(".error-campo").textContent = "Las contraseñas no coinciden.";
        correcto = false;
    }

    if (formulario.correo && formulario.correo.value !== "" && formulario.correo.value.indexOf("@") === -1) {
        formulario.correo.parentElement.querySelector(".error-campo").textContent = "Ingresa un correo válido.";
        correcto = false;
    }
    if (formulario.run && formulario.run.value !== "") {
        run = formulario.run.value.replace(/[.-]/g, "");
        if (run.length < 8) {
            formulario.run.parentElement.querySelector(".error-campo").textContent = "Ingresa un RUN válido.";
            correcto = false;
        }
    }

    if (correcto) {
        mensaje = formulario.querySelector("[data-mensaje]");
        if (mensaje) mensaje.textContent = "Formulario enviado correctamente.";
        formulario.reset();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var formularios = document.querySelectorAll("form");
    var anios = document.querySelectorAll("[data-anio]");
    var i;

    for (i = 0; i < formularios.length; i++) {
        formularios[i].addEventListener("submit", validarFormulario);
    }
    for (i = 0; i < anios.length; i++) {
        anios[i].textContent = new Date().getFullYear();
    }
});
