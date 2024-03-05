/*  Dada la clase Ciudad, agregue los métodos get y set para las propiedades nombre, pais y cantHabitantes.*/

class Ciudad {
    constructor(nombre,pais,cantHabitantes){
        this._nombre = nombre;
        this._pais = pais;
        this._cantHabitantes = cantHabitantes;
    }
    // GETTERS Y SETTER
    get nombre(){
        return this._nombre ;
    }
    get pais(){
        return this._pais;
    }
    get cantHabitantes(){
       return this._cantHabitantes;
    }

    set nombre(nvoNombre){
        this._nombre = nvoNombre;
    }

    set pais (nvoPais){
        this._pais = nvoPais;
    }

    set cantHabitantes(nvaCantidad){
        this._cantHabitantes = nvaCantidad;
    }
}
let nvaCiudad1 = new Ciudad("Frankfurt","Alemania",456);
let nvaCiudad2 = new Ciudad("Paris","Francia",2.195);

/* Dada la clase Colegio, agregue los métodos get y set para las propiedades nombre, direccion y cantAlumnos. */

class Colegio{
    constructor(nombre,direccion,cantAlumnos){
        this._nombre = nombre;
        this._direccion = direccion;
        this._cantAlumnos = cantAlumnos;
    }

    get nombre(){
        return this._nombre;
    }

    get direccion(){
        return this._direccion;
    }

    get cantAlumnos(){
        return this._cantAlumnos;
    }

    set nombre(nvoNombre){
        this._nombre = nvoNombre;
    }

    set direccion(nvaDireccion){
        this._direccion = nvaDireccion;
    }
    set cantAlumnos(nvaCantAlumnos){
        this._cantAlumnos = nvaCantAlumnos;
    }
}