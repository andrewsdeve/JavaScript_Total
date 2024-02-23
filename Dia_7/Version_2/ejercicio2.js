function capturarNota(idNota){
    let elementoNota = document.getElementById(idNota)
    let notaIngresada = elementoNota.value;
    let nota = Number(notaIngresada);
    return nota;
}


function calcular(){
    let notas = [];

    notas[0] = capturarNota("nota1");
    notas[1] = capturarNota("nota2");
    notas[2] = capturarNota("nota3");
    notas[3] = capturarNota("nota4");
    notas[4] = capturarNota("nota5");
    notas[5] = capturarNota("nota6");
    notas[6] = capturarNota("nota7");
    notas[7] = capturarNota("nota8");

    let menorNota = menoresNota(notas) ;

    let mensajePantalla = `La Menor Nota es:  ${menorNota}`;

    let mostrarMensaje = document.getElementById("textoPantalla");

    mostrarMensaje.textContent = mensajePantalla;
}


function menoresNota(array){
    let notaMenor  = array[0];
    for (let calcularNota of  array){
        if (calcularNota < notaMenor ){
            notaMenor = calcularNota;
        }
    }
    return notaMenor;
}