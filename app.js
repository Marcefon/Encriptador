// Funcion encriptar
function encriptarTexto() {
    // Obtener el texto del input y mostrarlo en el textarea
    let texto = document.getElementById("texto").value;
    let evaluarTexto = document.getElementById('evaluarTexto');
    let titulo = document.getElementById ('titulo');
    let parrafo = document.getElementById ('parrafo');
    let muñeco = document.getElementById ('muñeco');
    
   
    // Encriptar el texto reemplazando letras
    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    // Si hay letras en el input hacer lo siguiente
    if (texto.length != 0) {
        document.getElementById('evaluarTexto').value = textoEncriptado;
        titulo.innerText = 'Aquí tienes tu texto encriptado';
        parrafo.innerText = 'Copia y pega el texto en el recuadro para desencriptar.'
        btnCopiar.style.visibility = "inherit";
        btnLimpiar.style.visibility = "inherit";
        evaluarTexto.style.visibility = "inherit";
        muñeco.src = "./img/ilustracion-2.svg";
    }

    else {
        Swal.fire("Ingresa algún texto!");
    }

    // Vaciar el campo de texto
    document.getElementById("texto").value = "";

    return;
}


//funcion copiar
function copiar() {
    // Obtener el textarea
    var textarea = document.getElementById("evaluarTexto");
    
    // Seleccionar el texto
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Confirmar la acción al usuario
    Swal.fire("Texto copiado con éxito!");
}

// Funcion desencriptar
function desencriptarTexto() {
    let texto = document.getElementById("texto").value;
    let evaluarTexto = document.getElementById('evaluarTexto');
    let titulo = document.getElementById ('titulo');
    let parrafo = document.getElementById ('parrafo');
    let muñeco = document.getElementById ('muñeco');

    let textoEncriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0) {
        document.getElementById('evaluarTexto').value = textoEncriptado; 
        titulo.innerText = 'Aquí tienes tu texto Desencriptado';
        parrafo.innerText = 'Da click en reiniciar para encriptar \nuna nueva palabra.'
        btnCopiar.style.visibility = "inherit";
        btnLimpiar.style.visibility = "inherit";
        evaluarTexto.style.visibility = "inherit";
        muñeco.src = "./img/ilustracion-3.svg";
    }

    else {
        Swal.fire("Ingresa algún texto!");
    } 

    // Vaciar el campo de texto
    document.getElementById("texto").value = "";

    return;
}


// Funcion limpiar
function limpiar() {

    let titulo = document.getElementById ('titulo');
    let parrafo = document.getElementById ('parrafo');
    let muñeco = document.getElementById ('muñeco');


    graficas.style.visibility = "inherit";
    btnCopiar.style.visibility = "hidden";
    btnLimpiar.style.visibility = "hidden";
    evaluarTexto.style.visibility = "hidden";

    titulo.innerText = 'Ningún mensaje fue encontrado';
    parrafo.innerText = 'Ingresa el texto que desees encriptar o desencriptar.'
    muñeco.src = "./img/ilustracion-1.svg";

} 


//Desactivar botones y poner alerta Mayusculas y acentos
document.getElementById('texto').addEventListener('input', function() {
    const texto = this.value;
    const condicion = document.getElementById('condicion');
    const boton1 = document.getElementById ('boton1');
    const boton2 = document.getElementById ('boton2');
        
    // Expresiones para mayúsculas y acentos
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneAcentos = /[áéíóúüÁÉÍÓÚÜ]/.test(texto);
        
    // Validar si hay mayúsculas o acentos
    if (tieneMayusculas || tieneAcentos) {
        condicion.classList.add('error');
        boton1.disabled = true;
        boton2.disabled = true;
        boton1.style.opacity = '0.3';
        boton2.style.opacity = '0.3';
    }
        
    else {
        condicion.classList.remove('error');
        boton1.disabled = false;
        boton2.disabled = false;
        boton1.style.opacity = '1';
        boton2.style.opacity = '1';
        }
    }
)
