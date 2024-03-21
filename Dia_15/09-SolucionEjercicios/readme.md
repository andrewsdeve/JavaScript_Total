Soluciones a las Prácticas del Día 15


Antes de dar por finalizadas las prácticas del día de hoy y pasar al proyecto, te comparto las posibles soluciones para cada una de las prácticas que fueron propuestas el día de hoy, en caso de que hayas tenido alguna dificultad para terminarlas.

¡Ten en cuenta que estas soluciones no son únicas! Si has arribado por otro camino a un código que arroja un resultado correcto en VS Code o tu editor de código preferido, quiero que sepas que has hecho un buen trabajo (no siempre pueden contemplarse todos los casos a la hora de evaluar una tarea).


Práctica: Solicitudes POST con Fetch 1

    function agregarRegistro(nombre, datos) {
        fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nombre,
                data: datos
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }


Práctica: Otras Solicitudes HTTP con Fetch 1

    function agregarRegistro(identificador, nombre) {
        fetch('https://api.restful-api.dev/objects/' + identificador, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nombre
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }


Práctica: Otras Solicitudes HTTP con Fetch 2

    function agregarRegistro(identificador) {
        fetch('https://api.restful-api.dev/objects/' + identificador, {
            method: 'DELETE'
        })
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }


Práctica: Axios en Detalle 1

    function consultarElementos() {
        axios.get('https://api.restful-api.dev/objects')
        .then(respuesta => console.log(respuesta.data))
        .catch(error => console.error(error))
    }