const entrada = document.querySelector(".textarea_entrada");
const salida = document.querySelector(".textarea_salida");

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
    entrada.value = "";
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
    entrada.value = "";    
}

function copiar(){    
    const copiarSalida = salida;
    copiarSalida.select();
    document.execCommand('copy');
}

function confuguracionSeccionEncriptado(){ 
    const copiar = document.querySelector(".btn_copiar");
    const label1 = document.querySelector(".label_1");
    const label2 = document.querySelector(".label_2");
    copiar.style.visibility = 'visible';
    label1.style.display = "none";
    label2.style.display = "none";
    salida.style.backgroundImage = "none";
}