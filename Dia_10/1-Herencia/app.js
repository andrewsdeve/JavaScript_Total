// Clases en JavaScript, es una mejora de la sintaxis, en la forma que lo escribimos, provee una forma de escribirlo una forma mas clara y simple.
/* 1. Una clase es una funcion especial
   2. Existen 2 manera de definirlas
    a. Declaracion de clase ejemplo:

        class Papel{
            constructor(alto,ancho){
                this.alto = alto;
                this.ancho = ancho;
            }
        }
    b. Expresion de clase, ejemplo:
        1. Anonima ejemplo:
            let papel = class {
                constructor(alto, ancho) {
                    this.alto = alto;
                    this.ancho = ancho;
                }
            }

        2. Nombrada Ejemplo: 
            let Papel = class MiPapel {
                constructor(alto,ancho){
                    this.alto = alto;
                    this.ancho = ancho;
                }
            }
*/

//DECLARACION DE CLASE
class Papel {
    constructor(ancho,alto){
        this.ancho = ancho;
        this.alto = alto;
    }
}

//EXPRESION DE CLASE
// 1. Anonima

let PapelA = class{
    constructor(ancho,alto){
        this.ancho = ancho;
        this.alto = alto;
    }
}

//2. Nombrada

let PapelB = class PapelX {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}



