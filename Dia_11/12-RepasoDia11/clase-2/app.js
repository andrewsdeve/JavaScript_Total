let datosJson;

fetch('persona.json') // construimos al fetch con unas funciones complementarias
.then(res => res.json()) // funcion then quiere decir una vez que se cumpla la promesa
.then((salida) => {
    datosJson = salida; // guardamos los datos en el array global "datosJson"

    let elementoTexto = document.getElementById("lista");
    elementoTexto.textContent = datosJson.nombre;
})
