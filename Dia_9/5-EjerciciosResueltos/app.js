/* Práctica: Cadena de Prototipos 1

    let auto = {marca: 'Ford', modelo: 'Focus'};
     
    function prototipos() {
        let auto1 = Object.create(auto);
        console.log(auto1.__proto__);
    }


Práctica: Cadena de Prototipos 2

    let estudiante = { nombre: 'Paul', apellido: 'McCartney', legajo: 66992};
     
    function prototipos() {
        let estudiante1 = Object.create(estudiante);
        console.log(estudiante1.__proto__);
    }


Práctica: Cadena de Prototipos 3

    function Futbolista(nombre, equipo, posicion) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.posicion = posicion;
    }
     
    function prototipos() {
        let futbolista1 = new Futbolista('Lionel Messi', 'PSG', 'Delantero');
        console.log(futbolista1.valueOf());
    }


Práctica: Cadena de Prototipos 4

    function Pelicula(titulo, director, duracion) {
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion;
    }
     
    function prototipos() {
        let pelicula1 = new Pelicula('Jurassic Park', 'Steven Spielberg', 127);
        console.log(pelicula1.valueOf());
    }


Práctica: Constructor en Prototipos 1

    function Empleado(nombre, antiguedad, sueldo) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;
    }
     
    let empleado1 = new Empleado("Federico Garay", 5, 150);
     
    let empleado2 = Object.create(empleado1);


Práctica: Constructor en Prototipos 2

    function Restaurante(nombre, direccion, ciudad) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.ciudad = ciudad;
    }
     
    let restaurante1 = new Restaurante("Moon", "Av Colon 150", "Cordoba, Argentina");
     
    let restaurante2 = Object.create(restaurante1);


Práctica: Modificar Prototipos 1

    function Videojuego(nombre, empresa, anioLanzamiento) {
        this.nombre = nombre;
        this.empresa = empresa;
        this.anioLanzamiento = anioLanzamiento;
    }
     
    let videojuego1 = new Videojuego('Mario Bros', 'Nintendo', 1983);
     
    Videojuego.prototype.play = function () {
        console.log(this.nombre + " ha sido iniciado");
    }


Práctica: Modificar Prototipos 2

    function Cancion(nombre, autor, album) {
        this.nombre = nombre;
        this.autor = autor;
        this.album = album;
    }
     
    let cancion1 = new Cancion('Take on Me', 'a-ha', 'Hunting High and Low');
     
    Cancion.prototype.stop = function () {
        console.log(this.nombre + " en pausa");
    }


Recuerda que si tienes alguna duda que aún no quede resuelta, tienes a tu disposición el espacio de Preguntas y Respuestas.

Te veo en el proyecto!
*/