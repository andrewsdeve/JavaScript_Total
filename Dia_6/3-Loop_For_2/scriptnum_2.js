function multiplicar(){
    // Se lee el dato ingresado en el input
    let tablaNumero = document.getElementById("numeroDeTabla");
    // se captura el valor del input mediante otra variable
    let numeroDeLaTabla = tablaNumero.value;
    //como el valor ingresado lo toma como string ahora se combienrte a valor numerico
    let tabla = Number(numeroDeLaTabla);


    // luego se leera el texto de la tabla que aparecera enpantalla

    let tablaTexto = document.getElementById("textoTabla");

    // ahora vamos a crear el loop con for para realizar las tablas de multiplicar

    for(i=0; i<=10;i++){
        let resutaldoTabla = tabla * i;

        // realizamos el sttring que va aparecer en el texto de la tabla 

        let textoResultado =  `${tabla} X ${i} = ${resutaldoTabla}`

        // creamos la nueva lista con el string creado anterriormente y es la que se va a mostrar en pantalla 

        let nuevalista = document.createElement("li");
        nuevalista.innerText = textoResultado;
        tablaTexto.appendChild(nuevalista);
    }

}