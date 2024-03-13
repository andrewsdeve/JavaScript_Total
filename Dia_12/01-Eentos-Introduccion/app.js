/* Eventos

Acciones, sucesos e interacciones
addEventListener

mas comunes: click, dobleclick,mouseove, mouseout.. etc

*/

// 1. Creamos la funcion para capturar el evento del boton
let boton = document.getElementById("miBoton");

//2. utilizar el metodo addEventlistener (Agregamos el escuchador de eventos)

boton.addEventListener('click', function(){
    alert('Boton Presionado');
});





