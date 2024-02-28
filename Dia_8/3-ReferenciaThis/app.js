/* REFERENCIA THIS:   */

let perro = {
    nombre: "Simba",
    raza: "León de mar",
    edad: 4,

    ladrar(){
        console.log("Guau Guau!");
    },
    saludar(){
        console.log(`Hola me llamo: ${this.nombre}`);
    }
}

let perro2 = {
    nombre: "Trosqui",
    raza: "Labrador",
    edad: 14,

    ladrar(){
        console.log("Guau Guau!");
    },
    saludar(){
        console.log(`Hola me llamo: ${this.nombre}`);
    }
}