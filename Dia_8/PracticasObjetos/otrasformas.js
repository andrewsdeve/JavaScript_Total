let carro = Object();

//Criando um objeto com propriedades e métodos

// Otro metodo
carro.marca = "Fiat ";
carro['modelo'] = 'Ducato';
carro.encender = function(){
    console.log('Encendiendo')
}

let perro = Object({raza:'San Bernando'}); // Creando un objeto con propiedades 

/* Crear el objeto automovil, con los siguientes atributos, pero partiendo del objeto Object():

    marca: Ford

    modelo: Fiesta

    anio: 2015 */

    let automovil = new Object();
    automovil.marca = 'Ford';
    automovil[modelo] = 'Fiesta';
    automovil[anio] = 2015;

    let automovil1 = { 
        marca: 'Ford', 
        modelo: 'Fiesta', 
        anio: 2015, 
        arrancar() { console.log("En marcha") }
    };
    
    let automovil2 = new Object.create(automovil1)


// otro metodo

let carro1 = new Object.create(carro); // Este metodo casi no es soportado por los navegadores

