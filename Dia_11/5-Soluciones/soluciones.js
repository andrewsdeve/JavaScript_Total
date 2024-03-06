Soluciones a los Ejercicios Prácticos del Día 11
Soluciones a las Prácticas del Día 11


Antes de dar por finalizadas las prácticas del día de hoy y pasar al proyecto, te comparto las posibles soluciones para cada una de las prácticas que fueron propuestas el día de hoy, en caso de que hayas tenido alguna dificultad para terminarlas.

¡Ten en cuenta que estas soluciones no son únicas! Si has arribado por otro camino a un código que arroja un resultado correcto en VS Code o tu editor de código preferido, quiero que sepas que has hecho un buen trabajo (no siempre pueden contemplarse todos los casos a la hora de evaluar una tarea).


Práctica: JSON 1

    let json1 = {
        "titulo": "Titanic",
        "director": "James Cameron",
        "lanzamiento": 1997,
        "duracion": 134,
        "actores": [ "Leonardo DiCaprio", "Kate Winslet"],
        "premioOscar": true
    };


Práctica: JSON 2

    let json1 = {
        "nombre": "Collegium",
        "direccion": { "calle": "Calle Publica 123", "ciudad": "Buenos Aires" },
        "cantEstudiantes": 3,
        "estudiantes": [ "Pedro Picapiedra", "Pablo Marmol", "Vilma Picapiedra"],
    };


Práctica: Datos en JSON 1
index.js

    let titulo;
    let director;
    let lanzamiento;
    let duracion;
    let actores;
    let premioOscar;
     
    function obtenerDatos() {
        let datosJson;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "datos.json", true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(xhr.status === 200) {
                datosJson = xhr.response;
                titulo = datosJson.titulo;
                director = datosJson.director;
                lanzamiento = datosJson.lanzamiento;
                duracion = datosJson.duracion;
                actores = datosJson.actores;
                premioOscar = datosJson.premioOscar;
            }
        }
        xhr.send();
    }


Práctica: Datos en JSON 2
index.js

    let nombre;
    let calle;
    let ciudad;
    let cantEstudiantes;
    let estudiantes;
     
    function obtenerDatos() {
        let datosJson;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "datos.json", true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(xhr.status === 200) {
                datosJson = xhr.response;
                nombre = datosJson.nombre;
                calle = datosJson.direccion.calle;
                ciudad = datosJson.direccion.ciudad;
                cantEstudiantes = datosJson.cantEstudiantes;
                estudiantes = datosJson.estudiantes;
            }
        }
        xhr.send();
    }


Práctica: Fetch 1
index.js

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
    }


Práctica: Fetch 2
index.js

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
    }


Práctica: Catch 1
index.js

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
        .catch(function(error) {
            console.log(error);
        })
    }


Práctica: Catch 2
index.js

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
        .catch(function(error) {
            alert(error);
        })
    }


Recuerda que si tienes alguna duda que aún no quede resuelta, tienes a tu disposición el espacio de Preguntas y Respuestas.

Te veo en el proyecto!
