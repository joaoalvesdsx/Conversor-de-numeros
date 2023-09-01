document.getElementById('convert').onclick = converteNumero;
document.getElementById('clear').onclick = clearForm;

toggleButton.addEventListener("click", function () {
    const textoAtual = tituloConversor.textContent;
    if (textoAtual === "Romano - Arabico") {
        tituloConversor.textContent = "Arabico - Romano";
        modoRomanoParaArabico = false;
        clearForm();
    } else {
        tituloConversor.textContent = "Romano - Arabico";
        modoRomanoParaArabico = true;
        clearForm();
    }
});

function ConRomAra(){
    
       
        var fahrenheit = document.getElementById("converter").value;
         let resultado = 0;
         let ln = null;
         let algarismos = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
         fahrenheit = fahrenheit.toUpperCase();
         for (let i = fahrenheit.length-1; i >= 0; i--) {
             let char = fahrenheit.charAt(i);
             for (let chave in algarismos) {
                 if( char === chave){
                     let nc = parseInt(algarismos[chave]);
                     if (ln !== null) {
                         if (nc < ln) {
                             nc = nc*-1;
                         }
                     }
                     resultado = resultado + nc;
                     ln = nc;
                 }
             }
          }
          document.getElementById("convertido").value = (resultado);
     
 }





function ConAraRom(){
    var celsius = document.getElementById("converter").value; 
    let resultado = '';
    let divisao = 0;
    let resto = celsius;
    let vetorNumeros = [1000,500,100,50,10];
    let vetorRomanos = ['M','D','C','L','X'];
    let vetorDezena = ['I','II','III','IV','V','VI','VII','VIII','IX'];
 
    for (let i = 0; i < vetorNumeros.length; i++) {
        divisao = parseInt(resto/vetorNumeros[i]);
        resto = celsius % vetorNumeros[i];
        if (divisao > 0) {
            for (let x = 0; x < divisao; x++) {
                resultado = resultado + vetorRomanos[i];
            }
        } else if (resto < 10) {
            if (vetorDezena[resto-1] !== undefined) {
                resultado = resultado + vetorDezena[resto-1];
            }
            break;
        }
    }
    document.getElementById("convertido").value = (resultado);
}


function clearForm(){
    document.getElementById("converter").value = "";
    document.getElementById("convertido").value = "";
}

function converteNumero() {
    if (modoRomanoParaArabico) {
        ConRomAra();
    } else {
        ConAraRom();
    }
}