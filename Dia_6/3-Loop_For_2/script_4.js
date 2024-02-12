function multiplica(){
    // Se captura la informacion del numero de tabla de multiplicar que el usuario quiere ver en del input

    let usuarioNumero = document.getElementById("numeroUsuario");
    let numeroTabla = usuarioNumero.value;
    let numero = Number(numeroTabla);

    // Se captura el texto que se va a mostrar en pantalla en una variable distinta

    let textoDePantalla = document.getElementById("textoPantalla");

    //realizamos la operacion con el ciflo for

    for (i=0; i<= 10; i++){
        let resultado = numero * i;
         

        //Armamos el string que se va a mostarr en pantalla

        let resultadoPantalla = `${numero} X ${1} = ${resultado}`

        // creamos una nueva lista con el resultado de la tabla

        let nuevaLista = document.createElement("li");
        nuevaLista.innerText = resultadoPantalla;
        textoDePantalla.appendChild(nuevaLista);

    }
}