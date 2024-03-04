/* Los prototipos es un mecanismo que permite herencia entre objetos,objeto que funciona como plantilla.
Que es una cadena de prototipos en javaScript: enlace que se crea entre prototipos que tienen su propio prototipo
 */

let perro = {nombre:"Simba"};

let perro1 = new Object.create(perro); // Creamos una instancia de perro



