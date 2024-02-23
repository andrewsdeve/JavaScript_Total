/* En la función ya declarada, calcule el promedio de notas del array e imprima en consola el resultado del calculo realizado. */

function capturaNota(idNota){
    let elementoCaptura = document.getElementById(idNota);
    let notaCapturada = elementoCaptura.value;
    let nota = Number(notaCapturada);
    return nota;
}

function calcular(){
    let notas =[];

    notas[0] = capturaNota("nota1");
    notas[1] = capturaNota("nota2");
    notas[2] = capturaNota("nota3");
    notas[3] = capturaNota("nota4");
    notas[4] = capturaNota("nota5");
    notas[5] = capturaNota("nota6");
    notas[6] = capturaNota("nota7");
    notas[7] = capturaNota("nota8");

    let promedioNotas = promedio(notas);

    let mensajePantalla = `El promedio de las notas es: ${promedioNotas}`;

    let elementoSalida = document.getElementById("mensajePantalla");

    elementoSalida.textContent = mensajePantalla;
}

function promedio(array){

    let promedio = 0;
    for(let suma of array){
        promedio = promedio + suma / 8;
    }
    return promedio;
}