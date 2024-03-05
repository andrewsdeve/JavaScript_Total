class Animal{
    constructor(nombre,peso,edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
        }
        informacion(){
            return ` ${this.nombre} - ${this.peso}kg - ${this.edad} años`
        }
    }
  
class Perro extends Animal{
    constructor(nombre,peso,edad, raza){
        super(nombre,peso,edad);
        this.raza = raza;
    }
    informacion(){
        return(` ${this.nombre}, Pesa:  ${this.peso}Kg   ${this.edad}  años ${this.raza}`)
    }
}

class Gato extends Animal{
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this.sexo = sexo;
    }
    informacion(){
        return(` ${this.nombre}, Pesa:  ${this.peso}Kg   ${this.edad}  años ${this.sexo}`)
    }
}

class Conejo extends Animal{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this.color = color;
    }
    informacion(){
        return(` ${this.nombre}, Pesa:  ${this.peso}Kg   ${this.edad}  años ${this.color}`)
    }
}


let miPerro = new Perro("Trosqui",20,3,"Labrador");
let miGato = new Gato("Michicu",8,1,"Macho");
let miConejo = new Conejo("Nixon",5,1.5,"Blanco");

let array = [miPerro,miGato,miConejo];

function mostrar(){

    let lista = document.getElementById("listaMascotas");
    for(let animales of array){
        let item = document.createElement("li");
        item.innerText = animales.informacion();
        lista.appendChild(item);
    }

}

