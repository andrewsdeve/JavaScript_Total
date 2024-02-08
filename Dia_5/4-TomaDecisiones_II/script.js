function evaluar(){
    let elementoPrecioLeche = document.getElementById("precioLeche");
    let elementoTextoPantalla = document.getElementById("textoDesicion");
    let precio = elementoPrecioLeche.value;

    if(precio < 5){
        elementoTextoPantalla.textContent = "Comparar 2 cajas de Leche";
    }else{
        if(precio < 8){
            elementoTextoPantalla.textContent = "Comparar 1 Caja de Leche";
        }else{
            elementoTextoPantalla.textContent = "No hacer ninguna Compra";
        }
    }
}