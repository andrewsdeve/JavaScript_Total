function extraerNumero(inputId){
    let miInputId = document.getElementById(inputId);
    let miTexto = miInputId.value;
    let miNumero = Number(miTexto);
    return miNumero;
}



function calcular(){
    let ventas =[];
    ventas[0] = extraerNumero("ventasTienda1");
    ventas[1] = extraerNumero("ventasTienda2");
    ventas[2] = extraerNumero("ventasTienda3");
    ventas[3] = extraerNumero("ventasTienda4");
    ventas[4] = extraerNumero("ventasTienda5");
    ventas[5] = extraerNumero("ventasTienda6");

    let totalVentas = sumarTotal(ventas)
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas) ;


    let mensajePantalla = `Total Ventas:  ${totalVentas}   Venta Mayor: ${ventaMayor}    Venta Menor:  ${ventaMenor}`


    let mensajeSalida = "Total ventas: " + totalVentas +
                        "/Venta Mayor: " + ventaMayor +
                        "/Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida")
    elementoSalida.textContent = mensajePantalla;
}

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta;
    }
    return total

}


function calcularMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo
}

function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo
}