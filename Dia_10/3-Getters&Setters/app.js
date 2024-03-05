/*

1. get = Obtener valores de propiedades  -> Obtener el vavlor Actual
2. set = establecer nuevas propiedades de un objeto  -> Obtener un Nuevo Valor

*/

class Deportista{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
class Futbolista extends Deportista{
    constructor(nombre,apellido,goles){
        super(nombre,apellido);
        this._goles = goles;  // Propiedad Privada _
    }
    get goles(){
        return this._goles;   // Metodo GET para obtener valor privado
    }
    set goles(nvoGoles){
        this._goles = nvoGoles; // Metodo Set  para asignar nuevo valor a la propiedad privada
    }
}
let Fubolista1 = new Futbolista ("Carlos", "Gomez", 5);

// Otro ejemmplo

class Medicos{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Cirujanos extends Medicos{
    constructor(nombre,apellido,especialidad){
        super(nombre,apellido);
        this._especialidad = especialidad;
    }
    get  especialidad(){
        return this._especialidad;
    }

    set especialidad(nuevaEspecialidad){
        this._especialidad = nuevaEspecialidad;
    }
}

let nvoMedico = new Medicos("Carlos", "Martinez");
let nvoCirujano = new Cirujanos("Juan", "Gomez","Cardiologia");



