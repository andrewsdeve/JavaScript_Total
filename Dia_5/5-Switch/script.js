function validar(){
    let elementoCantidad = document.getElementById("cantidadFruta");
    let elementoPantalla = document.getElementById("textoPantalla");
    let fruta = elementoCantidad.value;

    switch(fruta){
        case "1":
            elementoPantalla.textContent = "$ 10.25";
            break;
        case "2":
            elementoPantalla.textContent = "$ 9.34";
            break;
        case "3": 
            elementoPantalla.textContent = "$ 8.34";
            break;
        case "4":
            elementoPantalla.textContent = "$ 12.65";
            break;
        case "5":
            elementoPantalla.textContent = "$ 9.45";
            break;
    }

}