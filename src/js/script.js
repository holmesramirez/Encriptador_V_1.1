const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar () {
    const textoEncriptado = encriptar (textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    if (textoEncriptado == "") {
    mensaje.style.backgroundImage = "";
    alert("¡Introduzca un texto para encriptar!");
    }else{
        mensaje.style.backgroundImage = "none";
    }
}


function encriptar (menEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    menEncriptado = menEncriptado.toLowerCase();
    for (let codigo of matrizCodigo) {
        if (menEncriptado.includes(codigo[0])) {
            menEncriptado = menEncriptado.replaceAll(codigo[0], codigo[1]);
        }
    }    
    return menEncriptado;
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar (mensaje.value);
    textArea.value = textoDesencriptado;
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
    if(textoDesencriptado == "") {
        alert("¡No hay texto encriptado para desencriptar!");
    }
}

function desencriptar (menDencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    menDencriptado = menDencriptado.toLowerCase();
    for (let codigo of matrizCodigo) {
        if (menDencriptado.includes(codigo[1])) {
            menDencriptado = menDencriptado.replaceAll(codigo[1], codigo[0]);
        }
    }
    return menDencriptado;
}


function btnCopiar() {
    let textarea = document.querySelector('.mensaje');
    let texto = textarea.value;
    
    navigator.clipboard.writeText(texto)
    .then(function() {
        if (texto == "") {
            alert("¡No hay texto para copiar!");
        }else{
            alert('Texto copiado al portapapeles: ' + texto);
        }
    })
    .catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
}


