/* CALLBACKS:  Devolver una llamada

function funcionPrincipal(callback){
    //codigo de la funcion principal;
    //llamada a la funcion callback
    callback();
};

function funcionCallback1(){
    //Codigo de la funcion Callback
};

//Llamada
funcionPrincipal(funcionCallback1);
*/

function avanzaFila(callback){
    setTimeout(function(){
        console.log(`Tu turno ha llegado`)
        callback();
    },5000);
};

function mujerTeLlama(){
    console.log(`Te presentas a tu turno`)
}
console.log(`Llegas a la fila`);
avanzaFila(mujerTeLlama);
console.log(`Te vas a comprar cafe...`)

// EJERCICIOS UDEMY

/* Dada la función imprimir() ya desarrollada, programar la función test que dispare un timeout con un tiempo de 2000, y que cumplido el tiempo, llame a la funcion callback pasandole como mensaje lo siguiente: Hola mundo */

function imprimir(){
    console.log(`Hola Mundo....`);
};

function test(callback){
    setTimeout(function(){
        callback();
    },2000);
};

test(imprimir);

/* Programar la función test que dispare un timeout con un tiempo de 1500, y que cumplido el tiempo, llame a una función callback que también se deberá programar.  Esta segunda función, se debe llamar mensaje() y deberá mostrar en un alert lo siguiente: Mensaje impreso */

function test1(callback){
    setTimeout(function(){
        callback();
    },1500);
};

function mensaje(){
    alert(`Mensaje Impreso..`);
};

test1(mensaje);





