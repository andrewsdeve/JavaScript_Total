/* En el método informacion() del objeto automóvil, agregar las referencias this para los dos atributos utilizados allí. */

let automovil = { 
    marca: 'Ford', 
    modelo: 'Fiesta', 
    anio: 2015, 
    informacion() { console.log("Marca: " + this.marca + ", Modelo: " + this.modelo) }
};

/* En el método fabricar() del objeto polo, agregar la referencia this para el atributo utilizado allí. */

let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
    fabricar() { console.log("Polo " + this.marca + " fabricado") }
};