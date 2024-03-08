let datosJson;
fetch('persona.json')
.then(res => res.json())
.then((salida) => {
    datosJson = salida;
let textoPantalla = document.getElementById("texto");
textoPantalla.textContent = datosJson.nombre;
})
.catch(function(error){
    alert(error);
})