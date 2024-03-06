/* Funcion => FETCH
1. Es una funcion nativa de JavaScript
2. fetch => extraer / recuperar
3. solictudes http asincrona
4. alternativa a XMLHttpRequest
5. Interfaz + simple / sintaxis + limpia

ejemplo:

fetch(url) => Devuelve una promesa que se resuelve con la respuesta del servidor

.then(res = res.json())
*/

let datosJson;
fetch('datos.json')
.then(res => res.json())
.then((salida) => {
    datosJson = salida;

    let elementoTexto = document.getElementById("nombre");
    elementoTexto.textContent = datosJson.nombre;
})
.catch(function(log){
    alert(log);
})

let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        titulo = salida.titulo;
        director = salida.director;
        lanzamiento = salida.lanzamiento;
        duracion = salida.duracion;
        actores = salida.actores;
        premioOscar = salida.premioOscar;
    })
    .catch(function(log){
        alert(log);
    })
}

let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let estudiantes;

function obtenerDatos() {
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        nombre = salida.nombre;
        calle = salida.direccion.calle;
        ciudad = salida.direccion.ciudad;
        cantEstudiantes = salida.cantEstudiantes;
        estudiantes = salida.estudiantes;
    })
    .catch(function(log){
        alert(log);
    })
}