let perro = {
    edad: 3,
    nombre: "Rex",
    raza: "Labrador",
    color: "Blanco",
    ladrar(){
        console.log("Guau Guau");
    }
}
perro.edad = 10;
perro["colorOjos"] = "Marron";


function cumplirAnios(){
    perro.edad =  perro.edad + 1;
}