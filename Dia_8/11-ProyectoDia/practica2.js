let empleados = [];


//objeto de Empleado
function Empleado(idEmpleado,nombre,apellido,nacimiento,cargo){
    this.idEmpleado = idEmpleado;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}
//Funcion del boton agregar empleado agregar()
function agregar(){
    //Capturamos los datos ingresados en los inputs del formulario
    let idEmpleado = document.getElementById("idEmpleado").value;
    let nombre = document.getElementById("textNombre").value;
    let apellido = document.getElementById("textApellido").value;
    let nacimiento = document.getElementById("textNacimiento").value;
    let cargo = document.getElementById("textCargo").value;
    //creamos un nuevo objeto de la clase Empleado con los valores capturados
    let nvoEmpleado = new Empleado(idEmpleado,nombre,apellido,nacimiento,cargo);
    
    //Agregamos el nuevo  objeto a la lista global de empleados
    empleados.push(nvoEmpleado);

    alert('Se agrego correctamente');
   //limpiamos los campos del formulario para que no se muestren los datos anteriores
    limpiarForm();
}

function listar(){
    // creamos un listado vacio
    let listado = " ";
    //se recorre el array empleados
    for (let empleado of empleados){
        //se toman las propiedades del empleado
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ": " + empleado[prop] + " ";
        }
        listado = listado + "\n";
    }
    alert(listado);
}

function limpiarForm(){
    document.getElementById("idEmpleado").value=""; 
    document.getElementById("textNombre").value=""; 
    document.getElementById("textApellido").value="";  
    document.getElementById("textNacimiento").value= "";
    document.getElementById("textCargo").value="";
}