async function obtenerTodo(){
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let datosGasolina = respuestaGasolina.json();

    let respuestaDolar = await  fetch('https://open.er-api.com/v6/latest/USD')
    let datoDolar = respuestaDolar.json();

    console.log(datosGasolina, datoDolar);
}

obtenerTodo();

// ejercicios UDEMY

/* Utilizando las palabras claves async y await, convertir la función request(url) en una función asíncrona (que simule sincronia) y que utilizando fetch, realice una petición a la variable url y retorne el resultado de la petición en formato json.*/

async function request(){
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let datosRespuesta = respuesta.json();
    console.log(datosRespuesta);
};
request();

/* Utilizando las palabras claves async y await, transformar el código de la función request(url) en una función asíncrona que simule ser sincrona. */

async function request(url) {
    let respuesta = await fetch(url);
    return await respuesta.json();
}

