function Perro(){
    //Atributos
    this.patas = 4;
    this.color ="Negro";
    this.ladrar = function(){
        console.log("Guau Guau");
    };
};

//Objeto de la clase perro
let miPerro = new Perro();  
let troqui = new Perro();
let mac = new Perro();


