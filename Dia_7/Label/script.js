function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById("elemento");
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcula(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 =  extraerNumeroDesdeElemento("tienda1");
    ventas2 =  extraerNumeroDesdeElemento("tienda2");
    ventas3 =  extraerNumeroDesdeElemento("tienda3");
    ventas4 =  extraerNumeroDesdeElemento("tienda4");
    ventas5 =  extraerNumeroDesdeElemento("tienda5");
    ventas6 =  extraerNumeroDesdeElemento("tienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "Total Ventas" + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
}