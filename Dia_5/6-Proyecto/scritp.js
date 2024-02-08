function recomendar(genero){
    let edad = document.getElementById("ingresaEdad").value;
    let recomendacion = document.getElementById("textoRecomendacion");

    switch(genero){
        case 'drama':
            if(edad < 13){
                recomendacion.textContent = "Casa Blanca"
            }else{
                if(edad <16){
                    recomendacion.textContent = "The Shawshank Redemption"
                }else{
                    recomendacion.textContent = "Taxi Driver"
                }
            }
            break;
        case 'comedia':
            if(edad < 13){
                recomendacion.textContent = "Back to the Futue"
            }else{
                if(edad <16){
                    recomendacion.textContent = "The Truman Show"
                }else{
                    recomendacion.textContent = "The Wolf of Wall Street"
                }
            }
            break;
        case 'musical':
            if(edad < 13){
                recomendacion.textContent = "La la Land"
            }else{
                if(edad <16){
                    recomendacion.textContent = "les Miserables"
                }else{
                    recomendacion.textContent = "The Rocky Horror Picture"
                }
            }
            break;
        case 'crimen':
            if(edad < 13){
                recomendacion.textContent = "No hay Opciones para esta edad"
            }else{
                if(edad <16){
                    recomendacion.textContent = "El secreto de tus ojos"
                }else{
                    recomendacion.textContent = "The Godfather"
                }
            }
            break;
    }

}