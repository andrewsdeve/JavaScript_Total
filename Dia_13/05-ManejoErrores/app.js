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



//async & await

 async function sumarNumeros(a,b){
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

 manejoErrores();






