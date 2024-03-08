let datosJson; // Creamos la Variable

fetch('nombreDeTuJson.json') // construimos al fetch con unas funciones complementarias, no olvides colocar el nombre que le pusiste a tu archivo json
.then(res => res.json()) // funcion then quiere decir una vez que se cumpla la promesa
.then((salida) => {
    datosJson = salida; // guardamos los datos en el array global "datosJson"

    let elementoTexto = document.getElementById("lista");
    elementoTexto.textContent = datosJson.nombre;
})