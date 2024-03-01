// 1. Creamos un array global vacio

let empleados = [];

// 2. creamos un objeto constructor Empleados

function Empleados(idEmpleado, nombre, apellido, nacimiento, cargo){ // recibe los parametros que se estan ingresando por teclado
    //Se crea el constructor
    this.idEmpleado = idEmpleado;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

// 3. Programamos la fucnion del boton agregar Empleado

function agregar(){

    //Capturamos los valores Agregados

    let idEmpleado = document.getElementById("idEmpleado").value;
    let nombre = document.getElementById("textoNombre").value;
    let apellido = document.getElementById("textoApellido").value;
    let nacimiento = document.getElementById("textoNacimiento").value;
    let cargo = document.getElementById("textoCargo").value;
    
    //Creamos  una instancia de Empleado con los datos capturados
    
    let nvoEmpleado  = new Empleados(idEmpleado, nombre, apellido, nacimiento,cargo);

    // Agragamos el nuevo empleado al array empleados

    empleados.push(nvoEmpleado);

    // imprimimos un mensaje en pantalla indicando que el empleado fue agragado por medio de un alert

    alert('Empleado Agragado Satisfactoraiamente');

    // creamos una funcion para limpiar los valores ingresados.

    limpiarValores();
}

function limpiarValores(){
    document.getElementById("idEmpleado").value = " ";
    document.getElementById("textoNombre").value = " ";
    document.getElementById("textoApellido").value = " ";
    document.getElementById("textoNacimiento").value = " ";
    document.getElementById("textoCargo").value = " ";
}

// 4. Se programa la funcion del boton listar empleados mediante la funcion listar()

function listar(){
    // creamos una lista vacia;
    let listado = " ";
    // recorremos el array por medio de for of 
    for(let empleado of empleados){
        //Vamos a tomar las propiedades del array por medio de for in
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ": " + empleado[prop] + ' ';

        }
        // listamos los empleados
        listado = listado + "\n"
    }
    // mostramos el resultado en nuestro 
    alert(listado);
}