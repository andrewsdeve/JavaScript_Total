/* Funcion => FETCH
1. Es una funcion nativa de JavaScript
2. fetch => extraer / recuperar
3. solictudes http asincrona
4. alternativa a XMLHttpRequest
5. Interfaz + simple / sintaxis + limpia

ejemplo:

fetch(url) => Devuelve una promesa que se resuelve con la respuesta del servidor

.then(res = res.json())
*/

let datosJson;
fetch('datos.json')
.then(res => res.json())
.then((salida) => {
    datosJson = salida;

    let elementoTexto = document.getElementById("nombre");
    elementoTexto.textContent = datosJson.edad;
})