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



