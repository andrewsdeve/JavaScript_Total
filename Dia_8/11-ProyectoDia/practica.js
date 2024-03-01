let empleados = [];


function Empleados(id,nombre,apellido,nacimiento,cargo){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}


function agregarEmpleado(){
    //Este bloque es para capturar los valores ingresados en los inputs
    let idEmple = document.getElementById("textId").value;
    let nombreEmple = document.getElementById("textNombre").value;
    let apellidoEmple = document.getElementById("textApellido").value;
    let nacimientoEmple = document.getElementById("textNacimiento").value;
    let cargoEmple = document.getElementById("textCargo").value;

    //Aqui creamos una instancia de empleado,segun el constructor creado en el objeto Empleados
    let empleado = new Empleados(idEmple,nombreEmple,apellidoEmple,nacimientoEmple,cargoEmple)

    // ahora se agrega cada empleado al array empleados[]
    empleados.push(empleado);
    //se crea un alert para informar al usuario que el empleado ha sido agregado
    alert("Empleado Agregado Satisfactoriamente")
    // vamos a crear una funcion que limpie los campos del formulario
    limpiarCampos();
}

//Programacion Boton Listar Empleados

function listarEmpleado(){
    // se crea un listado vacio
    let listado = ' ';
    // recorrer el array empleados []
    for(let empleado of empleados){
        //aqui se extraen las propiedaddes del empleado
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ': ' + empleado[prop] + ' ';
        }
        listado = listado + '\n';
    }
    alert(listado);
}

function limpiarCampos(){
    //Se utiliza para limpiar todos los input text de nuestro formulario
    document.getElementById('textId').value= "";
    document.getElementById('textNombre').value= ""; 
    document.getElementById('textApellido').value= "";  
    document.getElementById('textNacimiento').value= ""; 
    document.getElementById('textCargo').value= "";
}

