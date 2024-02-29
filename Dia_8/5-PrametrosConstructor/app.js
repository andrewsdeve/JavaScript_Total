function Empleado(nombre,apellido, edad, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.presentarse = function(){
        console.log(`Mi Nombre es ${nombre} ${apellido} y ocupo el cargo ${cargo} y tengo ${edad} años`); 
    }
}

let empleado1 = new Empleado("Juan","Perez", 35 , "Gerente Marketing");


