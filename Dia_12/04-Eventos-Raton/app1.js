/* EJERCICIO #  1 */

/* Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento mouseover al boton miBoton. Al disparar el evento, deberá imprimir en consola el mensaje: Mouse sobre botón */

function agregarEvento() {
    let boton = document.getElementById("miBoton");
    
    boton.addEventListener('mouseover', function() {
        console.log("Mouse sobre botón");
    });

    function agregarEvento1() {
        let boton = document.getElementById("miBoton");
        
        boton.addEventListener('mouseout', function() {
            console.log("Mouse por fuera de botón");
        });
    }
}