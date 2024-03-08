/* COMO MANEJAR EVENTOS EN EL DOM

DOM => document.getElementById("")
objeto event => propiedades del  evento (type, target, currentTarget)


*/
function evitarEnlace(event){
    event.preventDefault();
    alert('enlace no habilitado')
}



let boton = document.getElementById("miBoton");
let div = document.getElementById("miDiv");
let enlace =document.getElementById("miEnlace");
function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}

div.addEventListener( "click", mostrarMensaje );
enlace.addEventListener('click', evitarEnlace);

