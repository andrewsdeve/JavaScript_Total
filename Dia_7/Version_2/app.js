function extraerNumero(inputId){
    let miInputId = document.getElementById(inputId);
    let miTexto = miInputId.value;
    let miNumero = Number(miTexto);
    return miNumero;
}



function calcular(){
    let ventas1, ventas2,ventas3,ventas4,ventas5,ventas6;
    ventas1 = extraerNumero("ventasTienda1");
    ventas2 = extraerNumero("ventasTienda2");
    ventas3 = extraerNumero("ventasTienda3");
    ventas4 = extraerNumero("ventasTienda4");
    ventas5 = extraerNumero("ventasTienda5");
    ventas6 = extraerNumero("ventasTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
    let mensajeSalida = "Total ventas: " + totalVentas;

    let elementoSalida = document.getElementById("parrafoSalida")
    elementoSalida.textContent = mensajeSalida;
}