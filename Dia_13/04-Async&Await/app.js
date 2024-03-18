/* async function obtenerDatos(){

    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    let datos = await respuesta.json();
    console.log(datos)
}
obtenerDatos();
console.log(`El codigo Sigue`); */

// la forma mas larga para hacer lo mismo que la parte superior

/*  return fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico') */
    /* .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
    })
    .catch(function(error){
        console.log(error)
    }) */


    // Ejemplo mas complejo

async function obtenerDatos(){
    console.log(`Este codigo esta al comienzo ....`)
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let datosGasolina = await respuestaGasolina.json();


    console.log(`Este codigo esta en el medio`)
    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosDolar = await respuestaDolar.json();

    console.log(datosGasolina, datosDolar);
    console.log(`Este codigo esta al final`)
};

obtenerDatos();