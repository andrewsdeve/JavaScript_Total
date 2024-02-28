/* Crea un constructor para el objeto Automovil e inicializa las propiedades/atributos con los siguientes valores:

    marca: Ford

    modelo: Fiesta

    anio: 2015

    arrancar(): Debe mostrar en consola el mensaje "En marcha"*/

    function Automovil(){
        this.marca = "Ford";
        this.modelo  = "Fiesta";
        this.anio = 2015;
        this.arrancar = function() {
            console.log("En marcha");
            }
    }

    //objeto de la clase Automovil

    let mercedes = new Automovil();

    /* Crea un constructor para el objeto Polo e inicializa las propiedades/atributos con los siguientes valores:

    marca: Lacoste

    color: Azul

    talle: L

    fabricar(): Debe mostrar en consola el mensaje "Polo fabricado" */

    function Polo(){
        this.marca = "Lacoste";
        this.color = "Azul";
        this.talle = "L";
        this.fabricar = function(){
            console.log(`Polo Fabricando`);
        }
    }

    let  poloNuevo = new Polo();

    
