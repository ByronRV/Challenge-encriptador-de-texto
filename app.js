const entrada = document.querySelector(".presentacion__contenido__texto");
const salida = document.querySelector(".encriptado__texto");

function encriptar() {
    confuguracionSeccionEncriptado();
    const textoEntrante = entrada.value;
    let remplazarVocales = {
        'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'
    };    
    let textoSalida = '';
    for (let letra of textoEntrante){
        textoSalida += remplazarVocales[letra] || letra;
        console.log(textoSalida);
    }
    salida.value = textoSalida;
}

function desencriptar() {
    confuguracionSeccionEncriptado();
    const textoEntrante = entrada.value;
    let remplazarPorVocales = {
        'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'
    };
    let textoSalida = textoEntrante;
    for (let encriptado in remplazarPorVocales){
        textoSalida = textoSalida.split(encriptado).join(remplazarPorVocales[encriptado]);
    }
    salida.value = textoSalida;
}

function copiar(){    
    const copiarSalida = salida;
    copiarSalida.select();
    document.execCommand('copy');
}

function confuguracionSeccionEncriptado(){
    let copiar = document.getElementById('botonCopiar');
    copiar.style.visibility = 'visible';
    let imagen = document.getElementById('imagen2');
    imagen.style.visibility = 'hidden';
    imagen.style.width = '0%';
    let label = document.getElementById('label1');
    label.style.visibility = 'hidden';
    label.style.width = '0%';
    label.style.height = '0%';
}