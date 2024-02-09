function recomendar(genero){
    let edad = document.getElementById("ingresaEdad").value;
    let textoRecomendar = document.getElementById("recomendacion");

    switch(genero){
        case "drama":
            if (edad <13){
                textoRecomendar.textContent = "Casablanca"
            }else{
                if(edad <15){
                    textoRecomendar.textContent = "The Shawshank Redemption"
                }else{
                    textoRecomendar.textContent = "Taxi Driver"
                }
            }
            break;
        case "accion":
                if (edad <13){
                    textoRecomendar.textContent = "Spider-Man"
                }else{
                    if(edad <15){
                        textoRecomendar.textContent = "Entre Dos Mundos"
                    }else{
                        textoRecomendar.textContent = "365 Dias"
                    }
                }
             break;

        case "aventura":
                if (edad <13){
                    textoRecomendar.textContent = "Indiana Jones"
                }else{
                    if(edad <15){
                        textoRecomendar.textContent = "Mi Primer Beso"
                    }else{
                        textoRecomendar.textContent = "La Busqueda"
                    }
                }
             break;
        
        case "comedia":
                if (edad <13){
                    textoRecomendar.textContent = "Piratas del Caribe"
                }else{
                    if(edad <15){
                        textoRecomendar.textContent = "Alguien como EL "
                    }else{
                        textoRecomendar.textContent = "Fiesta de Empresa"
                    }
                }
             break;

        case "fantacia":
                if (edad <13){
                    textoRecomendar.textContent = "Los Cuatrocientos Golpes"
                }else{
                    if(edad <15){
                        textoRecomendar.textContent = "El Castillo Ambulante "
                    }else{
                        textoRecomendar.textContent = "Elsa y Fred"
                    }
                }
             break;

        case "crimen":
                if (edad <13){
                    textoRecomendar.textContent = "No tienes la edad suficiente para este genero de Peliculas"
                }else{
                    if(edad <15){
                        textoRecomendar.textContent = "No tienes la edad suficiente para este genero de Peliculas"
                    }else{
                        textoRecomendar.textContent = "Host - 88"
                    }
                }
             break;

    } /* Cierre Switch */

} /* cierre Funcion */

    