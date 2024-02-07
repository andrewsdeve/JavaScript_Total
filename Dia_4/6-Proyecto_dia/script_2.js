function mostrarResultado(resultado){
    document.getElementById("resultado").value=resultado;
}

function sumar(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    mostrarResultado(primerNumero + segundoNumero);
}

function restar(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    mostrarResultado(primerNumero - segundoNumero);
}

function multiplicar(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    mostrarResultado(primerNumero * segundoNumero);
}

function dividir(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    mostrarResultado(primerNumero / segundoNumero);
}

function potencia(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    mostrarResultado(Math.pow(primerNumero,segundoNumero));
}

function raiz(){
    let numero = +document.getElementById("numeroDos").value;
    mostrarResultado(Math.sqrt(numero));
}

function absoluto(){
    let numero = +document.getElementById("numeroDos").value;
    mostrarResultado(Math.abs(numero));
}

function random(){
    let minimo = +document.getElementById("numeroUno").value;
    let maximo = +document.getElementById("numeroDos").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor((Math.random() * (maximo-minimo))+minimo));
}

function round(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function piso(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}

function techo(){
    let resultado  = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}





