/* EVENTOS

1. Acciones
2. Sucesos
3. Interacciones
4. addEventlistener() => agregar un escuchador de ventos


ALGUNO DE LOS EVENTOS MAS  IMPORTANTES SON

1. click
2. doble click
3. mouseover
4. mouseout




*/

let boton = document.getElementById("miBoton");

function mostrarMensaje(){
    alert("Has pulsado el botón");
}

boton.addEventListener('click',mostrarMensaje); // Agregamos el evento a la acción que queremos realizar

function otroMensaje(){
    alert('flotar');
}

boton.addEventListener('mouseover',otroMensaje);

