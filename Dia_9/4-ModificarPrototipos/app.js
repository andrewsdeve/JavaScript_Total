function Libro(autor,titulo,cantPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.cantPaginas = cantPaginas;
}

let libro1 = new Libro("Garcia Marquez", "Soledad", 435);
let libro2 = new Libro("J.L. Borges", "Aleph", 321);

Libro.prototype.abrirLibro = function(){
    alert(`this.titulo: ${this.titulo}`);
}

