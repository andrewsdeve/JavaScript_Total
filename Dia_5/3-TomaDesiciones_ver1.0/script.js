function validar(){
    let elementoTextoPrecio = document.getElementById("textoPrecio");
    let elementoTextoCompra = document.getElementById("textoCompra");
    let precio = elementoTextoPrecio.value;
    
    if(precio < 5){
        elementoTextoCompra.textContent = "Comprar 2 cajas de Leche"
    }else{
        elementoTextoCompra.textContent = "El precio es muy alto NO COMPRAR!!!"
    }
}