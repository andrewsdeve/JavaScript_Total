/* Crea un constructor Empleado, con las propiedades nombre, antiguedad y sueldo. Luego se solicita crear la instancia empleado1 utilizando el constructor Empleado antes declarado. Y por último, crea otra instancia empleado2, pero ahora utilizando como objeto prototipo empleado1 para poner en práctica el funcionamiento de la cadena de prototipos. */

function Empleado(nombre, antiguedad,sueldo){
    this.nombre = nombre;
    this.antiguedad = antiguedad;
    this.sueldo = sueldo;
}

let empleado1 = new Empleado("Carlos Martinez", 15, 1500000);
let empleado2 = Object.create(empleado1);

/* Crea un constructor Restaurante, con las propiedades nombre, direccion y ciudad. Luego se solicita crear la instancia restaurante1 utilizando el constructor Restaurante antes declarado. Y por último, crea otra instancia restaurante2, pero ahora utilizando como objeto prototipo restaurante1 para poner en práctica el funcionamiento de la cadena de prototipos. */

function Restaurante(nombre, direccion, ciudad){
    this.nombre = nombre;
    this.direccion = direccion;
    this.ciudad = ciudad;
}

let restaurante1 = new Restaurante("Juan Valdez", "Salitre Plaza", "Bogota");
let restaurante2 = Object.create(restaurante1);

