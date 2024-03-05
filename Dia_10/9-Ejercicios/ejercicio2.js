class Computador {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
//creamos la subclase
class Monitor extends Computador{
    constructor(marca,modelo,pulgadas){
        super(marca,modelo);
        this.pulgadas = pulgadas;
    }
}

////////////////////////////////////////////

class Empleado {
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

class EmpleadoPlanta extends Empleado{
    constructor(nombre,apellido,edad,funciones){
        super(nombre,apellido,edad);
        this.funciones =  funciones;
    }
}

let newEmpleado = new Empleado("Juan","Gomez",34);
let newEmpleadoPlanta = new EmpleadoPlanta("Libardo","Garcia",54,"Reciclaje Carton")


// EJERCICIOS SUBCLASES UDEMY 
/* Dada la clase Persona ya definida, crear la subclase Empleado (que hereda de Persona) pero que agrega la propiedad: legajo. */

class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;s
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,legajo){
        super(nombre,apellido);
        this.legajo = legajo;
    }
}

let newPersona = new Persona("Juan", "Quintero");
let newEmpleado1 = new Empleado("Ricardo","Garcia",2345678);


/* Dada la clase Medico ya definida, crear la subclase Cirujano (que hereda de Medico) pero que agrega la propiedad: cantOperaciones. */

class Medico {
    constructor(nombre,apellido,matricula){
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }
}

class Cirujano extends Medico{
    constructor(nombre,apellido,matricula,cantOperaciones){
        super(nombre,apellido,matricula);
        this.cantOperaciones = cantOperaciones;
    }
}

let newMedico = new Medico("Juan","Rueda",9087654);
let newCirujano = new Cirujano("Ricardo", "Rico", 2345656 , 45);

