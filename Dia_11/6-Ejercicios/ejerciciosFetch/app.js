/* Dado el archivo auxiliar datos.json, obtener los datos de dicho archivo utilizando fetch y asigne cada campo a la variable correspondiente ya declarada. */

let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    let datosJson;
    fetch('datos.json')
    .then(res => res.json)
    .then((salida) =>{
        datosJson = salida;
        titulo = datosJson.titulo;
        director = datosJson.director;
        lanzamiento = datosJson.lanzamiento;
        duracion = datosJson.duracion;
        actores = datosJson.actores;
        premioOscar = datosJson.premioOscar;
    })
}