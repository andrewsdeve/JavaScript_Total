/* Dado el constructor Videojuego y la instancia videojuego1 ya declarados, se pide agregar una función al objeto prototipo Videojuego, de forma que se herede de forma dinámica a la instancia videojuego1 a través de prototype. La función se debe llamar play(), y debe imprimir en consola: "[nombre del videojuego] ha sido iniciado" */

function Videojuego(nombre, empresa, anioLanzamiento) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.anioLanzamiento = anioLanzamiento;
}

let videojuego1 = new Videojuego('Mario Bros', 'Nintendo', 1983);

Videojuego.prototype.play = function(){
    console.log(`${this.nombre} ha sido iniciado`);
}

/* Dado el constructor Cancion y la instancia cancion1 ya declarados, se pide agregar una función al objeto prototipo Cancion, de forma que se herede de forma dinámica a la instancia cancion1 a través de prototype. La función se debe llamar stop(), y debe imprimir en consola: "[nombre de la cancion] en pausa" */

function Cancion(nombre,autor,album){
    this.nombre = nombre;
    this.autor = autor;
    this.album = album;
}

let cancion1 = new Cancion('Take on Me', 'a-ha', 'Hunting High and Low');

Cancion.prototype.stop = function(){
    console.log(`${this.nombre} en pausa`)
}