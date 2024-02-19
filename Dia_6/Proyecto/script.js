let array = [7,4,2,9,6]; /* primero creamos el array */

/* lo primero que vamos ahcer es listar las notas, para lo cual vamos a crear una funcion que va hacer esto */

function listarNotas(){
    let lista = document.getElementById("listaNotas");
    /* Ahora a travez de un loop se van agregar los elementos del array a un elemento lista que mostrara en la pantalla las notas del array */

    for (let nota of array){
        let item = document.createElement( "li" );  //creamos un elemento li para meterlo a la lista
        item.innerText = nota;   //le ponemos el valor de la nota al texto del item 
        lista.appendChild(item);  //meteremos el item en la lista

    }
}
