function multiplicar(){
    // Vamos a capturar los datos de h2 y del input

    let numeroDeTabla = document.getElementById("numeroTabla");
    let tablaNumero =  numeroDeTabla.value;
    let numeroDeLaTabla = Number(tablaNumero);

    // capturamos la tabla

    let textoTabla = document.getElementById("textoPantallaTabla");

    for(i = 0 ; i <=10 ; i++){
        let resultado = numeroDeLaTabla * i;

        // Vamos a crear el string para mostastrar en pantalla

        let textoResultado = `${numeroDeLaTabla} X ${i} = ${resultado}`;

        // creamos el nuevo elemento lisa

        let itemListaNueva = document.createElement("li");
        itemListaNueva.innerText = textoResultado;
        textoTabla.appendChild(itemListaNueva);




    }





}