let datosJson;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "nombreDeTuJson.json", true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(xhr.status === 200) {
                datosJson = xhr.response;
                let elementoTexto = document.getElementById("nombre");
                elementoTexto.textContent = datosJson.nombre;
            } else {
                // manejar el error
            }
        }
        xhr.send();