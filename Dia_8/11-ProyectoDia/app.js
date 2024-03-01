let empleados = [];

function Empleado(legajo,nombre,apellido,nacimiento,cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo =cargo;
}

function agregarEmpleado(){
    let elementoLegajo = document.getElementById('txtlegajo').value;
    let  elementoNombre= document.getElementById('txtNombre').value;
    let elementoApellido = document.getElementById('txtApellido').value;
    let elementoNacimiento = document.getElementById('txtNacimiento').value;
    let elementoCargo = document.getElementById('txtCargo').value;

    let empleado = new Empleado(elementoLegajo, elementoNombre,elementoApellido,elementoNacimiento,elementoCargo);
    empleados.push(empleado);
    alert('Empleado ha sido agregado')
    limpiarCampos();
}

function mostrarEmpleados(){
    let listado = '';
    for(empleado of empleados){
        for(let prop in empleado){
            listado = listado + prop.toUpperCase( )+ " : " + empleado[prop] + " ";  
            
        }
        listado = listado + "\n";
        
    }
    alert(listado);
}

function limpiarCampos(){
    document.getElementById("txtlegajo").value = ' ';
    document.getElementById("txtNombre").value = ' ';
    document.getElementById("txtApellido").value = ' ';
    document.getElementById("txtNacimiento").value = ' ';
    document.getElementById("txtCargo").value = ' ';
}