/* EVENTOS EN EL DOM => Document Objet Model

    1. Eventos se pueden asociar  a un elemento HTML o al documento completo
    2. event => e => es un objeto que se pasa como parametro, ya que tiene informacion imporante sobre el evento
    

    3. Propiedades Imporatnes: 
    -event.target => Devuelve una referencia al objeto en el cual el evento fu originalmente enviado.


    -event.currentTarget => Devuelve una referencia al objeto actual registrado para el evento.

    -event.preventDefault() => Evita que el navegador realice la acción por defecto de un evento.
*/

let boton = document.getElementById("miBoton");
let div = document.getElementById("miDiv");
let enlace = document.getElementById("miEnlace");

function evitarEnlace(e){
    e.preventDefault();
    alert('Enlace no Habilitado')
}

function mostrarMensaje(e){
    alert(e.target);
    alert(e.currentTarget);
};

div.addEventListener('click',mostrarMensaje);
enlace.addEventListener('click', evitarEnlace);

