/* EVENTOS DEL RATON */
// 1. Sus propiedades mas imporatnes estan:
// a. keydown => Cuando el usuario preciosa una tecla
// b. keyup => Cuando se suelta una tecla
// c. keypress => cuando se preciosa y se suelta rapidamente

// PRACTICA ==> Funcional OK

let campo = document.getElementById("miCampo");
function verificarNumero(e){
    if(e.keyCode < 48 || e.keyCode > 57 ){
        e.preventDefault(); // esto hace eque esa tecla no se imprima
    };
};
campo.addEventListener('keydown', verificarNumero);
campo.addEventListener('keyup', function(e){
    console.log('Entrada del usuario ' + e.target.value);
});
campo.addEventListener('keypress', function(e){
    console.log('Caracter ingresado: ' + e.key)

})













