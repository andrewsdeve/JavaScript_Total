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


function calcularPromedio() {
    let suma = 0;
    for (i=0; i < 5; i++) {
        suma += array[i];
    }
    let promedio = (suma / 5);
    document.getElementById("promedio").textContent = promedio;
}

function notaMasAlta(){
    let notaAlta = 0;
    let i = 0;

    while( i < 5){
         if(array[i] > notaAlta){
            notaAlta = array[i];
         }
         i++
    }
    document.getElementById("nota").textContent = notaAlta
}

function hayAplazo(){
    let aplazo = "NO";
    let i = 0;

    do{
        if(array[i] < 4){
            aplazo = "Si";
            break;

        }
        i++
    } while(i < 5);

    document.getElementById("aplazo").textContent = aplazo;
}