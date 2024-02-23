/* Soluciones a las Prácticas del Día 7


Antes de dar por finalizadas las prácticas del día de hoy y pasar al proyecto, te comparto las posibles soluciones para cada una de las prácticas que fueron propuestas el día de hoy, en caso de que hayas tenido alguna dificultad para terminarlas.

¡Ten en cuenta que estas soluciones no son únicas! Si has arribado por otro camino a un código que arroja un resultado correcto en VS Code o tu editor de código preferido, quiero que sepas que has hecho un buen trabajo (no siempre pueden contemplarse todos los casos a la hora de evaluar una tarea).


Práctica: Label 1

    <!DOCTYPE html>
        <head>
            <title>Label 1</title>
        </head>
        <body>
            <label for="txtNombre">Nombre</label>
            <input type="text" id="txtNombre">
        </body>
    </html>


Práctica: Label 2

    <!DOCTYPE html>
        <head>
            <title>Label 2</title>
        </head>
        <body>
            <label for="txtEdad">Edad</label>
            <input type="text" id="txtEdad">
        </body>
    </html>


Práctica: Array 1

    let array = [6, 8, 4, 9, 1];
     
    function obtenerUltimoNumero() {
        console.log(array.pop());
    }


Práctica: Array 2

    let array = [6, 8, 4, 9, 1, 6, 7];
     
    function cantidadDeElementos() {
        console.log(array.length);
    }


Práctica: Array 3

    let notas = [6, 9, 7, 5, 1, 5, 4, 3];
     
    function promedio() {
        let suma = 0;
        for (let num of notas) {
            suma += num;
        }
        console.log(suma/notas.length);
    }


Práctica: Array 4

    let notas = [6, 9, 7, 5, 1, 5, 4];
     
    function menorNota() {
        let menor = notas[0];
        
        for (let nota of notas) {
            if (nota < menor) {
                menor = nota;
            }
        }
        
        console.log(menor);
    }


Práctica: Automatización 1
script.js

    function generarContenido() {
        let content = document.getElementById("contenido");
        
        let parrafo = document.createElement("p");
        parrafo.innerText = "Parrafo 1"
        
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "txtInput");
        
        content.appendChild(parrafo);
        content.appendChild(input);
        
        return content;
    }


Práctica: Automatización 2
script.js

    function generarContenido() {
        let content = document.getElementById("contenido");
        
        let label = document.createElement("label");
        label.setAttribute("for", "txtInput");
        label.innerText = "Label 1";
        
        
        let input = document.createElement("input");
        input.setAttribute("id", "txtInput");
        input.setAttribute("type", "number");
        input.setAttribute("value", 0);
        
        content.appendChild(label);
        content.appendChild(input);
        
        return content;
    }


Práctica: Automatización 3
script.js

    function generarContenido(numero) {
        let content = document.getElementById("contenido");
        
        let label = document.createElement("label");
        label.setAttribute("for", "txtInput" + numero);
        label.innerText = "Label " + numero;
        
        
        let input = document.createElement("input");
        input.setAttribute("id", "txtInput" + numero);
        input.setAttribute("type", "number");
        input.setAttribute("value", 0);
        
        content.appendChild(label);
        content.appendChild(input);
        
        return content;
    }


Práctica: Automatización 4
script.js

    function repetirContenido(veces) {
        for(let x = 1; x <= veces; x++) {
            generarContenido(x);
        }
    }
     
    function generarContenido(numero) {
        let content = document.getElementById("contenido");
        
        let label = document.createElement("label");
        label.setAttribute("for", "txtInput" + numero);
        label.innerText = "Label " + numero;
        
        
        let input = document.createElement("input");
        input.setAttribute("id", "txtInput" + numero);
        input.setAttribute("type", "number");
        input.setAttribute("value", 0);
        
        content.appendChild(label);
        content.appendChild(input);
        
        return content;
    }


Práctica: Automatización 5
script.js

    let sumaTotal = 0;
     
    function automatizarSuma() {
        let contenedor = document.getElementById("contenido");
        
        for (let item of contenedor.children) {
            sumaTotal += Number(item.children[1].value);
        }
    }


Práctica: Automatización 6
script.js

    let sumaTotal = 0;
     
    function automatizarSuma() {
        let contenedor = document.getElementById("contenido");
        
        for (let item of contenedor.children) {
            sumaTotal += Number(item.children[0].value);
        }
    }


Recuerda que si tienes alguna duda que aún no quede resuelta, tienes a tu disposición el espacio de Preguntas y Respuestas.

Te veo en el proyecto! */