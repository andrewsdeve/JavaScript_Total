/* eventos teclado
    1. keydown => precsiona una tecla
    2.keyup => cuando se suelta una tecla
    3.keypress => preciosa y suelta rapidamente
*/

let campo = document.getElementById("miCampo");
function verificarNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57 ){
        event.preventDefault();
    };

};

campo.addEventListener( "keydown", verificarNumero);
campo.addEventListener('keyup', function(){
    console.log("Entrada del Usuario " + event.target.value)
})
campo.addEventListener('keypress', function(event){
    console.log("Caracter ingresado: " + event.key)
})