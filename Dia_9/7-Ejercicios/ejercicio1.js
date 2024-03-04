/*Crea un constructor Futbolista, con las propiedades nombre, equipo y posicion. Y luego, dentro de la función prototipos(), cree una instancia futbolista1 mediante el constructor antes definido con los siguientes datos: "Lionel Messi", "PSG", "Delantero". Se pide que, en la misma función, se imprima en consola el resultado de ejecutar el método valueOf() de la instancia futbolista1. */

function Futbolista(nombre,equipo, posicion){
    this.nombre = nombre;
    this.equipo = equipo;
    this.posicion= posicion;
}

function prototipos(){
    let futbolista1 = new  Futbolista("Lionel Messi","PSG", "Delantero");
    console.log(futbolista1);
}

/* Crea un constructor Pelicula, con las propiedades titulo, director y duracion. Y luego, dentro de la función prototipos(), crea una instancia pelicula1 mediante el constructor antes definido con los siguientes datos: "Jurassic Park", "Steven Spielberg", 127. Se pide que, en la misma función, se imprima en consola el resultado de ejecutar el método valueOf() de la instancia pelicula1 . */

function Pelicula(titulo, director, duracion){
    this.titulo = titulo;
    this.director = director; 
    this.duracion = duracion
}

Pelicula.prototype.prototipos = function(){
    console.log(this.valueOf())
}

function prototipos1(){
    let pelicula1 = new Pelicula("Jurassic Park", "Steven Spielberg", 127);
    console.log(pelicula1)
    pelicula1.prototipos();
}

