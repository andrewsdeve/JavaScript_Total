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

/* Ejercicio udemy

Dado el código HTML proporcionado, programar la función agregarEvento() del archivo script.js, que agregue un evento click al boton miBoton. Utilizando la variable event asociada al evento, y utilizando la propiedad target, se puede acceder al elemento nodeName, que retorna el nombre de la etiqueta HTML que disparo el evento. Se pide imprimir en consola el contenido del elemento nodeName.

*/

let boton1 = document.getElementById("boton2")
function agregarEvento(event){
    alert(event.target);
}
boton1.addEventListener('click', agregarEvento);



