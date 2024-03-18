// Accion # 1

console.log('Inicio Codigo Sincronico.....');

// Accion # 2 "Sincrona"

/* for(let i =0; i<10; i++){
    console.log(`Numero: ${i}`);
}; */


// Accion # 2 Asincrona
setTimeout(function(){
    for(let i = 0; i < 10; i++){
        console.log(`Soy asincrono ${i}`);
    }
}, 0)



//Accion # 3

console.log(`Fin del codigo Sincrono....`)