/* Dentro de la función test, asignar a la variable promesa, un nuevo objeto Promise (promesa) que según la variable resultado (boolean), si la misma es true, llame al método resolve pasando el parámetro "Correcto" y en caso contrario (false), llamar al método reject pasando el parámetro "Error". */

let promesa;

function test(resuelto){
    promesa = new Promise(function(resolve,reject){
        if(resuelto){
            resolve('Correcto')
        }else{
            reject('Error')
        }
    })

}

/* Programar la función getDatos() para que retorne una promesa (new Promise) con el resultado de realizar una petición (utilizando XMLHttpRequest) sobre la url que recibe como parametro. Segun el estado de la peticion, recordar que se deben utilizar los métodos resolve (que devuelve el resultado de la peticion) y el método reject (que devuelve el error). */