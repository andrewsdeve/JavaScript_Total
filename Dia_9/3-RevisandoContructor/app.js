function Libro(autor,titulo,cantPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.cantPaginas = cantPaginas;
}

let libro1 = new Libro("Stephen Kink", "Carrie", 524);
let libro2 = Object.create(libro1);
let libro3 = new libro1.constructor("Gabriel Garcia Marquez", "Cien Años de Soledad", 543);


