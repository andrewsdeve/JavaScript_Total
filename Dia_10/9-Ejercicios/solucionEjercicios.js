/* Soluciones a los Ejercicios Prácticos del Día 10
Soluciones a las Prácticas del Día 10


Antes de dar por finalizadas las prácticas del día de hoy y pasar al proyecto, te comparto las posibles soluciones para cada una de las prácticas que fueron propuestas el día de hoy, en caso de que hayas tenido alguna dificultad para terminarlas.

¡Ten en cuenta que estas soluciones no son únicas! Si has arribado por otro camino a un código que arroja un resultado correcto en VS Code o tu editor de código preferido, quiero que sepas que has hecho un buen trabajo (no siempre pueden contemplarse todos los casos a la hora de evaluar una tarea).


Práctica: Clases 1

    class Mesa {
        constructor(alto, ancho, largo) {
            this.alto = alto;
            this.ancho = ancho;
            this.largo = largo;
        }
    }


Práctica: Clases 2

    let TV = class {
        constructor(marca, pulgadas) {
            this.marca = marca;
            this.pulgadas = pulgadas;
        }
    }


Práctica: Subclases 1

    class Persona {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
     
    class Empleado extends Persona {
        constructor(nombre, apellido, legajo) {
            super(nombre, apellido);
            this.legajo = legajo;
        }
    }


Práctica: Subclases 2

    class Medico {
        constructor(nombre, apellido, matricula) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.matricula = matricula;
        }
    }
     
    class Cirujano extends Medico {
        constructor(nombre, apellido, matricula, cantOperaciones) {
            super(nombre, apellido, matricula);
            this.cantOperaciones = cantOperaciones;
        }
    }


Práctica: Getters y Setters 1

    class Ciudad {
        constructor(nombre, pais, cantHabitantes) {
            this._nombre = nombre;
            this._pais = pais;
            this._cantHabitantes = cantHabitantes;
        }
        
        get nombre() {
            return this._nombre;
        }
        
        set nombre(nuevoNombre) {
            this._nombre = nuevoNombre;
        }
        
        get pais() {
            return this._pais;
        }
        
        set pais(nuevoPais) {
            this._pais = nuevoPais;
        }
        
        get cantHabitantes() {
            return this._cantHabitantes;
        }
        
        set cantHabitantes(nuevoCantHabitantes) {
            this._cantHabitantes = nuevoCantHabitantes;
        }
    }


Práctica: Getters y Setters 2

    class Colegio {
        constructor(nombre, direccion, cantAlumnos) {
            this._nombre = nombre;
            this._direccion = direccion;
            this._cantAlumnos = cantAlumnos;
        }
        
        get nombre() {
            return this._nombre;
        }
        
        set nombre(nuevoNombre) {
            this._nombre = nuevoNombre;
        }
        
        get direccion() {
            return this._direccion;
        }
        
        set direccion(nuevaDireccion) {
            this._direccion = nuevaDireccion;
        }
        
        get cantAlumnos() {
            return this._cantAlumnos;
        }
        
        set cantAlumnos(nuevaCantAlumnos) {
            this._cantAlumnos = nuevaCantAlumnos;
        }
    }


Recuerda que si tienes alguna duda que aún no quede resuelta, tienes a tu disposición el espacio de Preguntas y Respuestas.

Te veo en el proyecto!
 */