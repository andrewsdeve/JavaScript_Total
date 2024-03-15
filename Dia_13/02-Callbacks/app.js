/* Callback => Devolver una llamada*/

function avanzaFila(callback){
    setTimeout(function(){
        console.log('Tu turno ha llegado');
        callback();
    },5000);
}

function mujerTeLlama(){
    console.log('Te presentas a tu turno')
}
console.log('Llegas a la fila');
avanzaFila(mujerTeLlama);
console.log('Te vas a comprar Cafe')