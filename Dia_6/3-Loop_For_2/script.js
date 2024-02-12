function multiplicar(){
    // Obtener el numero
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Camptura la tabla

    let elementoTablaMultiplicar = document.getElementById("listaTaba");

    //Producir y mostar restultados

    for(x = 1 ; x <= 10 ; x++){
        //Calcular el resultado
        let numeroResultado = numeroTabla * x;

        //Armar un string con resultado
        let textoResultado = numeroTabla + " X " + x + " = " + numeroResultado;

        // Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
    
}