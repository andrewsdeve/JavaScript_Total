/* EVENTOS EN TIEMPO REAL
    1. Actualizan el website sin tener que recargar constantemente
    2. WebSockets => permiten comunicacion bidereccional entre navegador y servidor
    3.http/2 server push
*/

// 1. Creamos una variable socket

let socket = new WebSocket('ws://localhost:8080');


// 2. Creamos  variables

let mensajeIngresado = document.getElementById("mensajeIngresado");
let botonEnviar = document.getElementById("botonEnviar");

// 3. Crear Funcion que sirva para mostarr los mensajes debajo del input

function mostrarMensajes(contenido){
        let contenedorMensajes = document.getElementById("mensajesChat");
        let elementoMensaje = document.createElement('p');
        elementoMensaje.innerText = contenido;
        contenedorMensajes.appendChild(elementoMensaje);
};

botonEnviar.onclick = function(){
    let mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event){
    let mensaje = event.data
}















