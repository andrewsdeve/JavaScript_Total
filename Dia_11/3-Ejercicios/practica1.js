let datosJson;
let xhr = new XMLHttpRequest();
xhr.open('GET', "practica1.json",true);
xhr.responseType = 'json';
xhr.onload = function(){
    if(xhr.status === 200){
        datosJson = xhr.response;
        console.log("Se han cargado los datos");
        let textoPantalla = document.getElementById("mostrar");
        textoPantalla.textContent = datosJson.director

    }
}

xhr.send();