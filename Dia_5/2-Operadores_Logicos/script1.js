function validarEdad(){
    let elementoEdadIngresada = document.getElementById("edadIngresada");
    let elementoRespuesta = document.getElementById("respuesta");
    let textoRespuesta = elementoRespuesta.value;
    let edadIngresada = elementoEdadIngresada.value;
    textoRespuesta = edadIngresada >= 10 && edadIngresada <=15;
    elementoRespuesta.textContent = textoRespuesta;
}