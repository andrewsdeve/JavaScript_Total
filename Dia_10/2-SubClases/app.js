class Deportista{
    constructor(nombre,apellido){
        this.nombre =nombre;
        this.apellido = apellido;
    }
}

//Creamos una subclase

class Futbolista extends Deportista{
    constructor(nombre,apellido,goles){
        super(nombre,apellido); //llamada al constructor de la clase padre
        this.goles= goles;
    }
}

let newDeportista = new Deportista( "Pepe", "Pérez"); 
let newFutbolista = new Futbolista("Juan","García",50);


