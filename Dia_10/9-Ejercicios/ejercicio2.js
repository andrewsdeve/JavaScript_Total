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