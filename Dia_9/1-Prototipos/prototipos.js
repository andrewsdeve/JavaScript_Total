/* Los prototipos es un mecanismo que permite herencia entre objetos,objeto que funciona como plantilla.
Que es una cadena de prototipos en javaScript: enlace que se crea entre prototipos que tienen su propio prototipo
 */

//let perro = {nombre:"Simba"};

//let perro1 = new Object.create(perro); // Creamos una instancia de perro

/* Crea un objeto denominado auto, con las propiedades marca y modelo, y asígnale a estas propiedades algún valor. Luego, dentro de la función prototipos(), crea una instancia auto1 que se base en el prototipo auto. Se pide que, en la misma función, se imprima en consola el contenido de la propiedad proto de la instancia auto1, que como vimos, va a contener la referencia a su prototipo. */

let auto ={
    marca: "Ford",
    modelo: "Fiesta"
}


function prototipos(){
    let nvoAuto = new  Object(auto); 
    console.log(nvoAuto);
}

/* Crea un objeto denominado estudiante, con las propiedades nombre, apellido y legajo. Y luego, dentro de la función prototipos(), crea una instancia estudiante1 que se base en el prototipo estudiante. Se pide que, en la misma función, se imprima en consola el contenido de la propiedad proto de la instancia estudiante1, que como vimos, va a contener la referencia a su prototipo. */

let estudiante = {
    nombre : "Juan",
    apellido: "Perez",
    legajo: 234567890
};

function prototipos1(){
    let estudiante1 = new Object(estudiante);
    console.log(estudiante1)
}
