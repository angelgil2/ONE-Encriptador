function encriptar() {
    let textoOriginal = document.querySelector('.Texto').value;
    let textoEncriptado = textoOriginal.replace(/e/g, 'enter')
                                      .replace(/i/g, 'imes')
                                      .replace(/a/g, 'ai')
                                      .replace(/o/g, 'ober')
                                      .replace(/u/g, 'ufat');

    document.getElementById('Resultado').value = textoEncriptado;
    limpiarTextoOriginal();
}

function desencriptar() {
    let textoEncriptado = document.querySelector('.Texto').value;
    let textoOriginal = textoEncriptado.replace(/enter/g, 'e')
                                      .replace(/imes/g, 'i')
                                      .replace(/ai/g, 'a')
                                      .replace(/ober/g, 'o')
                                      .replace(/ufat/g, 'u');

    document.getElementById('Resultado').value = textoOriginal;
    limpiarTextoOriginal();
}

function Copiar() {
    let resultado = document.getElementById('Resultado');
    resultado.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}

function limpiarTextoOriginal() {
    document.querySelector('.Texto').value = '';
}