function multiplicar(){
    //Capturamos el numero de la tabla a multiplicar del input
    let tablaNumero = document.getElementById("numeroTabla");
    let numeroDeTabla = tablaNumero.value;
    let tabla = Number(numeroDeTabla); // OJO Esta variable es el numero de la tabla a multiplicar

    // Capturamos el texto que debe aparecer enpantalla para las tablas

    let textoDeTabla = document.getElementById("textoTabla");

    // Iniciamos hacer la iteracioncon FOR

    for(i = 0; i <= 10; i++){ // itera que el numero de la multiplicacion inicia en 0 y va hasta la tabla del  numero 10
        let resutadoTabla = tabla * i;

        // Creamos el string de como se va a mostrar el resultado asi

        let resultado = `${tabla}  X ${i} = ${resutadoTabla}`;

        // ahora creamos el nuevo elemento lista para mostrar en pantalla

        let listaResultado = document.createElement("li");
        listaResultado.innerText = resultado;
        textoDeTabla.appendChild(listaResultado);
    }
}