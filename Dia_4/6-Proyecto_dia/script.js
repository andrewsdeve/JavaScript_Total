function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function sumar(){
    let numero1 = +document.getElementById("numeroUno").value;
    let  numero2 = +document.getElementById("numeroDos").value;
    mostrarResultado(numero1 + numero2);
}

function restar(){
    let numero1 = +document.getElementById("numeroUno").value;
    let numero2 = +document.getElementById("numeroDos").value;
    mostrarResultado(numero1 - numero2);
}
function multiplicar(){
    let numero1 = +document.getElementById("numeroUno").value;
    let numero2 = +document.getElementById("numeroDos").value;
    mostrarResultado(numero1 * numero2);
}
function dividir(){
    let numero1 = +document.getElementById("numeroUno").value;
    let numero2 = +document.getElementById("numeroDos").value;
    mostrarResultado(numero1 / numero2);
}

function raiz(){
    let numero = +document.getElementById("numeroDos").value;
    
    mostrarResultado(Math.sqrt(numero));
}

function potencia(){
    let numero1 = +document.getElementById("numeroUno").value;
    let numero2 = +document.getElementById("numeroDos").value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function absoluto(){
    let numero = +document.getElementById("numeroDos").value;
    
    mostrarResultado(Math.abs(numero));
}

function aleatorio(){
    let minimo = +document.getElementById("numeroUno").value;
    let maximo = +document.getElementById("numeroDos").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo ) + minimo));
}

function redondeo(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}
function piso(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}
function techo(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}

