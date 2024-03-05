//Primer Ejercicio

/* Crear una clase Mesa que define mediante su constructor las propiedades: alto, ancho y largo. Utilizar la Declaración de Clase para definirlo. */

class Mesa{
    constructor(alto,ancho,largo){
        this.alto = alto;
        this.ancho = ancho;
        this.largo = largo;
    }
}
let newMesa = new Mesa(30,60,15);

class Avion{
    constructor (marca,modelo,capacidad){
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
    }
}
let nvoAvion = new Avion("Boing", "A353"  , 420);

class Coche{
    constructor(marca,modelo,anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}
let nvoCoche = new Coche("Chevrolet", "Sonic", 2016);

class Tableta {
    constructor (marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let newTable = new Tableta("Ipad","Pro");

class Mouse {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
let newMouse = new Mouse("Logitech","G935");


// SEGUNDO EJERCICICO

/* Crear una clase TV que define mediante su constructor las propiedades: marca y pulgadas. Utilizar la Expresión de Clase Anónima para definirlo. */

//Clases Anonimas

let TV = class {
    constructor(marca,pulgadas){
        this.marca = marca;
        this.pulgadas = pulgadas;

    }
}
let newTv = new TV("LG", 47);

let Vaso = class{
    constructor(capacidad, material) {
        this.capacidad = capacidad;
        this.material = material;
    }
}
let newVaso = new Vaso("15ml", "Vidrio");

let Computador = class{
    constructor(marca,modelo,capacidad){
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad; //en GB

    }
}
let newComputador = new Computador("Sony", "LR45","30GB");

// Clases Nombradas

let articulo = class Monitor{
    constructor(marca,modelo,pulgadas){
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
}
let newMonitor = Monitor(20,"Acer","4K");


let Coches = class Carros{
    constructor(marca,modelo,anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}
let newCarro = Carros("Ford", "Fiesta", 2019);

let LapTop = class Portatil{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let newLaptop = Portatil("Acer","A345");



