/* EVENTOS DEL RATON */
// Sus propiedades mas imporantes esta: 
// 1. click => Al dar clic
//2. mousemove => cuando se mueve el mouse del objetivo
//3. mouseover => Cuando el mouse se posesiona sobre un objetivo
//4. mouseout => cuando el mouse es retirado del objetivo

// Primer evento para tenerlo en cuenta y funciona OK

// let menu = document.getElementById("miMenu");
// let boton = document.getElementById("miBoton");
// boton.addEventListener('click', function(){
//     menu.style.display="block";
// });


// Segunda forma de hacerlo pero solo cuando pasamos el mouse sobre el boton

let menu = document.getElementById("miMenu");
let boton = document.getElementById("miBoton");

boton.addEventListener('mouseover', function(){
    menu.style.display='block';
});
boton.addEventListener('mouseout', function(){
    menu.style.display='none';
});

document.addEventListener('mousemove', function(e){
    console.log(`Posicion X:  ${e.clientX} - Posicion Y: ${e.clientY}`)
});




















