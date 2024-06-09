// esto agrega las aficiones al darle al enter
document.getElementById('input-aficiones').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAficion();
    }
});

// agrega una aficion a la list
function agregarAficion() {
    var inputAficion = document.getElementById('input-aficiones');
    var aficion = inputAficion.value.trim();
    if (aficion !== "") {
        var listaAficiones = document.getElementById('lista-aficiones');
        var item = document.createElement('li');
        item.textContent = aficion;
        item.className = 'list-group-item';
        listaAficiones.appendChild(item);
        inputAficion.value = "";
    }
}

// valida el formul
function validar() {
    var retorno_usuario = validar_usuario();
    var retorno_contrasena = validar_contrasena();
    var retorno_confirmacion = validar_confirmacion();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    var retorno_aficiones = validar_aficiones();
    return retorno_usuario && retorno_contrasena && retorno_confirmacion && retorno_direccion && retorno_comuna && retorno_telefono && retorno_url && retorno_aficiones;
}

// val usuario
function validar_usuario() {
    var usuario = document.getElementById('input-usuario').value;
    var div_error = document.getElementById('error-usuario');
    var usuario_regex = /^[A-Za-z][A-Za-z0-9]{4,9}$/;
    if (usuario.match(usuario_regex)) {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "El nombre de usuario debe comenzar con una letra, tener entre 5 y 10 caracteres y no contener caracteres especiales.";
        return false;
    }
}

// val contra
function validar_contrasena() {
    var contrasena = document.getElementById('input-contrasena').value;
    var usuario = document.getElementById('input-usuario').value;
    var div_error = document.getElementById('error-contrasena');
    if (contrasena.length >= 3 && contrasena.length <= 6 && /\d/.test(contrasena) && /[A-Za-z]/.test(contrasena) && !contrasena.includes(usuario)) {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres, contener al menos un dígito y una letra, y no puede contener el nombre de usuario.";
        return false;
    }
}

// val confirm contra
function validar_confirmacion() {
    var contrasena = document.getElementById('input-contrasena').value;
    var confirmacion = document.getElementById('input-confirmacion').value;
    var div_error = document.getElementById('error-confirmacion');
    if (contrasena === confirmacion) {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "La confirmación de la contraseña no coincide.";
        return false;
    }
}

// val dire
function validar_direccion() {
    var direccion = document.getElementById('input-direccion').value;
    var div_error = document.getElementById('error-direccion');
    if (direccion.trim() !== "") {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "La dirección es obligatoria.";
        return false;
    }
}

// val comuna
function validar_comuna() {
    var comuna = document.getElementById('select-comuna').value;
    var div_error = document.getElementById('error-comuna');
    if (comuna !== "default") {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "Debe seleccionar una comuna.";
        return false;
    }
}

// val numero tel
function validar_telefono() {
    var telefono = document.getElementById('input-telefono').value;
    var div_error = document.getElementById('error-telefono');
    var telefono_regex = /^\+?\d{9,15}$/;
    if (telefono.match(telefono_regex)) {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "El número de teléfono no tiene el formato correcto.";
        return false;
    }
}

// val url
function validar_url() {
    var url = document.getElementById('input-url').value;
    var div_error = document.getElementById('error-url');
    try {
        new URL(url);
        div_error.innerHTML = "";
        return true;
    } catch (_) {
        div_error.innerHTML = "La URL no tiene el formato correcto.";
        return false;
    }
}

// val af
function validar_aficiones() {
    var listaAficiones = document.getElementById('lista-aficiones').getElementsByTagName('li');
    var div_error = document.getElementById('error-aficiones');
    if (listaAficiones.length >= 2) {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "Debe ingresar al menos 2 aficiones.";
        return false;
    }
}
