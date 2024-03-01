/* Hasta ahora hemos visto dos formas de crear objetos

1. forma1
let objeto = {
    propiedad1 = valor1,
    propiedad2 = valor2
}

//forma 2
function Objeto (propiedad1, propiedad2){
    this.propiedad1 = propiedad1;
    this.propiedad2 = propiedad2;
    }
    


*/

// Nueva forma de  crear objetos

let coche1 = new Object();
coche1.marca = "Chevrolet";
coche1["modelo"] = "Prisma";
coche1.encender = function(){
    alert("El coche se ha encendido");
}

// Otra manera de crear objeto con objetct es:

let perro1 = new Object({nombre:"Simba"});

// utiliando la forma CREATE

let coche2 = new Object.create(coche1); //heredad toda la informacion de coche1

