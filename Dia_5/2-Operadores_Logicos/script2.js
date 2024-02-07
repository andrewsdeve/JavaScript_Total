/* Operadores Logicos*/
/*  1. AND logico (&&)
    2. OR Logico (||)
    3. NOT Logico (!)
*/

function validar(){
    let elementoEdad = document.getElementById("edadIngresada");
    let textoResultado = document.getElementById("resultado");
    let edad = elementoEdad.value;
    let textoPantalla = edad == 10 || edad == 20;
    textoResultado.textContent = textoPantalla
    
}