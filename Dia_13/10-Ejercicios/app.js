/* Callback => Devolver una llamada*/
/* Dada la función imprimir() ya desarrollada, programar la función test que dispare un timeout con un tiempo de 2000, y que cumplido el tiempo, llame a la funcion callback pasandole como mensaje lo siguiente: Hola mundo */

function test(callback){
    setTimeout(function(){
        callback();
    },2000)
};

function imprimir(){
    console.log('Hola Mundo !!')
}

test(imprimir)

// EJERCICIO # 2

/* Programar la función test que dispare un timeout con un tiempo de 1500, y que cumplido el tiempo, llame a una función callback que también se deberá programar.  Esta segunda función, se debe llamar mensaje() y deberá mostrar en un alert lo siguiente: Mensaje impreso */

function test(callback){
    setTimeout(function(){
        callback();
    },1500)
}

function mensaje(){
    alert('Mesaje Impreso');
};

test(mensaje);