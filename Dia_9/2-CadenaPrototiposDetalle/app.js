/* Cadena Prototips en Detalle */
/*  */

function Libro(autor,libro,cantPaginas){
    this.autor = autor; 
    this.nombreLibro= libro;
    this.cantPaginas= cantPaginas;
}

let libro1 = new Libro("Stephen King", "Carrie", 524);