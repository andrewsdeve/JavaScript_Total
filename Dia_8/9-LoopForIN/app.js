function Perro(raza,edad,color){
    this.patas = 4;
    this.raza = raza;
    this.edad = edad;
    this.color = color;
    this.mensaje = function(){
        console.log('Guau Guau!!!')
    }
}

let simba = new  Perro("Malamute",3,"Blanco");
let golden = new Perro("Criollo",5,'Negro');

for(let caracteristica in simba){
    console.log(caracteristica + ': ' + simba[caracteristica])
}

/* Implementar la función mostrarInfo(), que utilizando un Loop For In, debe imprimir en consola las propiedades/atributos del objeto automovil con el siguiente formato:

marca: Ford

modelo: Fiesta

anio: 2015 */
let automovil = { 
    marca: 'Ford', 
    modelo: 'Fiesta', 
    anio: 2015
};

function mostrarInfo() {
    for(let atributo in automovil){
        console.log(atributo + ': ' + automovil[atributo])

    }
}

/* Implementar la función mostrarInfo(), que utilizando un Loop For In, debe imprimir en consola las propiedades/atributos del objeto polo con el siguiente formato:

marca: Lacoste

color: Azul

talle: L */

let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
};

function mostrarInfo() {
    for(let atributos in polo){
        console.log(atributos + ':' + polo[atributos]);

    }
}
