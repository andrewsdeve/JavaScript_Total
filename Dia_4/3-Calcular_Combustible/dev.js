function calcularLitros(){
    let elementoKm = document.getElementById("textoKM");
    let textKm = elementoKm.value;
    let cantKm = Number(textKm);

    let cantLitros =Math.ceil(cantKm / 8.8);
    let resultado = document.getElementById("textoResultado");

    resultado.textContent = `Carga ${cantLitros} litros de combustible`
}