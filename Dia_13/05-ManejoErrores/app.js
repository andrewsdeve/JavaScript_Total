/* EXISTEN TRES FORMAS PARA EL MANEJO DE ERRORES EN PROGRAMACION ASINCRONICA

1. Callbacks
2. Promesas
3. async / await


*/

//callbacks  => OK

/* function sumarNumeros(a,b, callback){
    setTimeout(function(){
        if(typeof a != 'number' || typeof b !='number'){
            return callback( new Error('Algun argumento no es numero'));
        }
        callback(null , a + b);
    }, 2000);
};

sumarNumeros("8",7, function(error,resultado){
    if(error){
        console.log(error);
    }else{
        console.log(resultado)
    }

}) */

//Promesas

/* function sumarNumeros(a,b){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof a != 'number' || typeof b !='number'){
                 reject = new Error(`Ambos Argumentos deben ser numeros`)   
            }else{
                resolve(a + b);
            }
        },2000)
    })
}

sumarNumeros("4",6)
.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.error(error);
}); */

/* En primer lugar, se solicita llamar al método reject cuyo parámetro será un objeto error (new Error) si el numero es igual a 0 en la función tablaDelCinco(). Además, programar la función manejarErrores(), que deberá llamar a la función tablaDelCinco y utilizando los elementos .then y .catch de la promesa resultante, deberá imprimir en consola el resultado de la misma. Debe usar console.log y console.error respectivamente. */

function tablaDelCinco(n){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(n === 0){
                reject('No se puede Multiplicar')
            }else{
                resolve( 5 * n)
            }
        },1000);
    });
};

function manejarErrores(){
    tablaDelCinco(0)
    .then(function(respuesta){
        console.log(respuesta);
    }).catch(function(error){
        console.error(error)
    })
}

manejarErrores();



//async & await

 /* async function sumarNumeros(a,b){
    if(typeof a != 'number' || typeof b !='number'){
        throw new Error('Alguno de los argumentos no es un numero')
    }
    return a + b;
 };

 async function manejoErrores(){
    try{
        let resultado = await sumarNumeros(7,8);
        console.log(resultado);
    }catch(error){
        console.error(error);
    };
 };

 manejoErrores(); */

 /* Ejercicios Udemy */

 /* En primer lugar, se solicita lanzar un error (new Error) si el numero es igual a 0 en la función tablaDelCinco(). Además, programar la función manejarErrores(), que utilizando un bloque try catch llame a la función tablaDelCinco() utilizando la palabra clave await. Si se genera un error (es decir que el catch captura ese caso) imprimir en consola (utilizando console.error) el mensaje de error, y en caso contrario imprimir en consola el resultado de la función tablaDelCinco(). */


/* async function tablaDelCinco(numero){
    if(numero === 0){
        throw new Error('Error de Calculo...')
    }
    return 5 * numero;
};
async function manejarErrores(){
    try{
        let resultado = await tablaDelCinco(2);
        console.log(resultado);
    }catch(error){
        console.error(error);
    };
};
manejarErrores(); */










