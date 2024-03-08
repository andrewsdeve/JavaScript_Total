/* INTRODUCCION A JSON
1. JavaScript Object Notation
2. Puede ser utilizado independientemente que javaScript 
3. Un ejemplo de json es:
    {
        "clave":"valor",
        "clave1": 100,
        "clave2": {
            "clave2-a": "Valorx",
            "clave2-b": "valory"
        }
    }

*/

/* Escriba en formato JSON (dentro de los corchetes de la variable json1), la siguiente información sobre una película:

    titulo -> Titanic

    director -> James Cameron

    lanzamiento -> 1997

    duracion -> 134

    actores (array) -> Leonardo DiCaprio y Kate Winslet

    premioOscar -> true */

    /*
    Escriba en formato JSON (dentro de los corchetes de la variable json1), la siguiente información sobre un colegio:

    nombre-> Collegium

    direccion (objeto)

        calle -> Calle Publica 123

        ciudad -> Buenos Aires

    cantEstudiantes -> 3

    estudiantes (array) -> Pedro Picapiedra, Pablo Marmol y Vilma Picapiedra */

    /* ACCEDER A LOS DATOS EN JSON*/

    let miPersona = {
        "nombre": "Pedro Toledo",
        "edad": 45,
        "esEstudiante": false,
        "direccion": {
            "calle": "Av Siempre viva 742",
            "ciudad": "Springfield"
        },
        "telefonos": [
            "555-555-555",
            "555-555-556"
        ]
    }
    let texto = document.getElementById("nombre");
    texto.textContent = miPersona.nombre;

