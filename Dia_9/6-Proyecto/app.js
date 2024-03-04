function Automovil(marca,modelo,color,anio,titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil("Chevrolet","Sonic","Gris", 2016, "Carlos Martinez");
let automovil2 = new Automovil("Ford","Fiesta","Azul", 2020, "Santy Martinez");
let automovil3 = new Automovil("Wolkswagen","Jetta","Rojo", 2024, "Rut Contreras");

Automovil.prototype.venderAutomovil = function(nvoTitular){
    this.titular = nvoTitular;
}
Automovil.prototype.verAuto = function(){
    return(`${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`)
}

Automovil.prototype.encender = function(){
    alert('El Automovil esta en Marcha')
}

let array = [automovil1,automovil2,automovil3]

function mostrar(){

    let lista =  document.getElementById("listaAutomoviles");
    for (let automovil of array ){
        let item = document.createElement('li');
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }

}


/* Ahora, mediante la propiedad prototype del objeto prototipo Automovil vamos a agregar tres funciones.  Estas funciones son: venderAutomovil (que recibe un nuevo dueño por parametro y actualiza la propiedad titular), verAuto (que va a retonar el resultado de concatenar las propiedades del automovil con el formato: Marca Modelo - Año - Titular) y por ultimo, enceder (que va a mostrar en un alert el mensaje "El automovil esta en marcha"). */

/* Por último, vamos a desarrollar la función que va a mostrar en nuestra pagina HTML (al presionar el botón), la información de los automóviles. Dicha función, mediante un loop For Of va a recorrer el array que contiene las instancias de auto y en cada vuelta del ciclo, va a crear un elemento <li> (document.createElement), en donde se va a mostrar el resultado de la función verAuto() de la instancia y se va a adjuntar al elemento <ul> que declaramos en nuestra página (appendChild).

Si necesitas refrescar este concepto, repasa la lección Loop For Of.

Una vez que lo hayas hecho, selecciona "¡Listo!" y haz clic en "Comprobar Respuesta" */