/* Eventos

Acciones, sucesos e interacciones
addEventListener

mas comunes: click, dobleclick,mouseove, mouseout.. etc

*/

/* EVENTO CLICK !!! */


// 1. Creamos la funcion para capturar el evento del boton
let boton = document.getElementById("miBoton");

//2. utilizar el metodo addEventlistener (Agregamos el escuchador de eventos)

// boton.addEventListener('click', function(){
//     alert('Boton Presionado');
// });



//3. Otra forma de hacer lo anterior es crear una funcion para poderla ejecutar al momento de agregar a la llamada del evento

// 1. Creamos la funcion mostrarMensaje

function mostrarMensaje(){
    alert('El Boton ha sido Presionado!!!');
};

//2. Llamamos al evento del boton

boton.addEventListener('click', mostrarMensaje);

/* EVENTO MOUSE OVER !!!!!!*/

function mensajeMouseOver(){
    alert('Flotar!!!!');
};

boton.addEventListener('mouseover',mensajeMouseOver);






