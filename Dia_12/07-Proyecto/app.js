// DECLARAMOS VARIABLES

let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

let archivo = 'peliculas.json'

//DECLARAMOS LOS ESCUCHADORES

selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('cambioModo', mensajeModo );

function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambiomodo');
    selector.dispatchEvent(evento); 
};

function mensajeModo(){
   alert('El archivo de busqueda ahora es: ' + selector.value);
};








