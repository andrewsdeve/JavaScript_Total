/* Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas. */

function listarNumeros(){
    let numeroIngresado = document.getElementById("numeroElegido");
    let numero = numeroIngresado.value;

    for(let i=0; i <= numero; i++){
        let listas = document.getElementById("lista");
        let item = document.createElement("li");
        item.innerText  = `${i}`;
        listas.appendChild(item);
    }
}

