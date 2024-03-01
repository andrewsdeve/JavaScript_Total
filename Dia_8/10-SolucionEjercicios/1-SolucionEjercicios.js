/* Soluciones a los Ejercicios Prácticos del Día 8
Soluciones a las Prácticas del Día 8


Antes de dar por finalizadas las prácticas del día de hoy y pasar al proyecto, te comparto las posibles soluciones para cada una de las prácticas que fueron propuestas el día de hoy, en caso de que hayas tenido alguna dificultad para terminarlas.

¡Ten en cuenta que estas soluciones no son únicas! Si has arribado por otro camino a un código que arroja un resultado correcto en VS Code o tu editor de código preferido, quiero que sepas que has hecho un buen trabajo (no siempre pueden contemplarse todos los casos a la hora de evaluar una tarea).


Práctica: Objetos 1

    let automovil = { 
        marca: 'Ford', 
        modelo: 'Fiesta', 
        anio: 2015, 
        arrancar() { console.log("En marcha") }
    };


Práctica: Objetos 2

    let polo = { 
        marca: 'Lacoste', 
        color: 'Azul', 
        talle: 'L', 
        fabricar() { console.log("Polo fabricado") }
    };


Práctica: Objetos 3

    let automovil = { 
        marca: 'Ford', 
        modelo: 'Fiesta', 
        anio: 2015, 
        arrancar() { console.log("En marcha") }
    };
     
    function modificarAnio() {
        automovil.anio = 2018;
    }


Práctica: Objetos 4

    let polo = { 
        marca: 'Lacoste', 
        color: 'Azul', 
        talle: 'L', 
        fabricar() { console.log("Polo fabricado") }
    };
     
    function agregarPropiedad() {
        polo["genero"] = 'Masculino'
    }


Práctica: This 1

    let automovil = { 
        marca: 'Ford', 
        modelo: 'Fiesta', 
        anio: 2015, 
        informacion() { console.log("Marca: " + this.marca + ", Modelo: " + this.modelo) }
    };


Práctica: This 2

    let polo = { 
        marca: 'Lacoste', 
        color: 'Azul', 
        talle: 'L', 
        fabricar() { console.log("Polo " + this.marca + " fabricado") }
    };


Práctica: Constructores 1

    function Automovil() {
        this.marca = 'Ford',
        this.modelo = 'Fiesta',
        this.anio = 2015,
        this.arrancar = function () { console.log("En marcha") }
    }


Práctica: Constructores 2

    function Polo() {
        this.marca = 'Lacoste',
        this.color = 'Azul',
        this.talle = 'L',
        this.fabricar = function () {
            console.log("Polo fabricado")
        }
    }


Práctica: Constructores con parámetros 1

    function Automovil(marca, modelo, anio) {
        this.marca = marca,
        this.modelo = modelo,
        this.anio = anio
    }


Práctica: Constructores con parámetros 2

    function Polo(marca, color, talle) {
        this.marca = marca,
        this.color = color,
        this.talle = talle
    }


Práctica: Otros objetos 1

    let automovil = new Object();
    automovil["marca"] = "Ford";
    automovil["modelo"] = "Fiesta";
    automovil["anio"] = 2015;


Práctica: Otros objetos 2

    let automovil1 = { 
        marca: 'Ford', 
        modelo: 'Fiesta', 
        anio: 2015, 
        arrancar() { console.log("En marcha") }
    };
     
    let automovil2 = Object.create(automovil1);


Práctica: Loop For In 1

    let automovil = { 
        marca: 'Ford', 
        modelo: 'Fiesta', 
        anio: 2015
    };
     
    function mostrarInfo() {
        for(let prop in automovil) {
            console.log(prop + ": " + automovil[prop]);
        }
    }


Práctica: Loop For In 2

    let polo = { 
        marca: 'Lacoste', 
        color: 'Azul', 
        talle: 'L', 
    };
     
    function mostrarInfo() {
        for(let prop in polo) {
            console.log(prop + ": " + polo[prop]);
        }
    }


Recuerda que si tienes alguna duda que aún no quede resuelta, tienes a tu disposición el espacio de Preguntas y Respuestas.

Te veo en el proyecto!
 */