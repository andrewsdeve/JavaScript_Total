/* INTRODUCCION A JSON
1. JavaScript Objet Notitation => Notacion de objetos en javascript
2. Formato de texto ligero, se utiliza para transmitir datos
3. compatible con javascript
4. formato de intercambio de datos estandarizado
5. Es una forma de representar informacion en un lenguaje de programación llamado Javascript
6. Se compone por pares "llave:valor" llamados propiedades o campos  
7. Las propiedades pueden ser de dos tipos:  
    - Propiedades normales (key:value)
    - Propiedades dinamicas (key) que devuelven el valor asignado a la clausula key
8. Para crear un json se puede utilizar los siguientes metodos: 
    1. Constructor de Json
        let obj = new Object();
        obj["nombre"]= "Juan";
        obj["edad"]= 20;
    2. Sin constructor de Json
       let obj = {
           nombre:"Juan",
           edad:20
       }
9. Podemos convertir un js a json y viceversa mediante las funciones parse() y stringify()
*/

// EJERCICIO CODIFICACION UDEMY

/* Escriba en formato JSON (dentro de los corchetes de la variable json1), la siguiente información sobre una película:

    titulo -> Titanic

    director -> James Cameron

    lanzamiento -> 1997

    duracion -> 134

    actores (array) -> Leonardo DiCaprio y Kate Winslet

    premioOscar -> true */

    let json1 = {
        "titulo": "Titanic",
        "director": "James Cameron",
        "lanzamiento": 1997,
        "duracion": 134,
        "actores": ["Leonardo DiCaprio","Kate Winslet"],
        "premioOscar":true
    };

    /* Escriba en formato JSON (dentro de los corchetes de la variable json1), la siguiente información sobre un colegio:

    nombre-> Collegium

    direccion (objeto)

        calle -> Calle Publica 123

        ciudad -> Buenos Aires

    cantEstudiantes -> 3

    estudiantes (array) -> Pedro Picapiedra, Pablo Marmol y Vilma Picapiedra */

    let json2 = {
        "nombre":"Collegium",
        "direccion":{
            "calle":"Calle Publica 123",
            "ciudad":"Buenos Aires",
        },
        "cantEstudiantes": 3,
        "estudiantes":[
            "Pedro Picapiedra",
            "Pablo Marmol",
            "Vilma Picapiedra"
        ]
    
    }