function obtenerDatos(){
    let datosJson;
fetch('resumen.json')
.then(res => res.json())
.then((salida) => {
    datosJson = salida;

    let elementoBanco = document.getElementById("infoBanco");
    elementoBanco.textContent = datosJson.banco;

    let elementoSucursal = document.getElementById("infoSucursal");
    elementoSucursal.textContent = datosJson.sucursal;

    let elementoTitular = document.getElementById("infoTitular");
    elementoTitular.textContent = datosJson.titular;

    let elementoCuenta = document.getElementById("infoNroCuenta");
    elementoCuenta.textContent = datosJson.nro_cuenta;

    let elementoSaldo = document.getElementById("infoSaldo");
    elementoSaldo.textContent = datosJson.saldo[0].monto;

    document.getElementById("euro").textContent = datosJson.saldo[1].monto;

    let elementoCbu = document.getElementById("infoCbu");
    elementoCbu.textContent = datosJson.cbu;

    let elementoAbierto = document.getElementById("infoAbierto");
    elementoAbierto.textContent = datosJson.abierto;

})
.catch(function(error){console.log(error)});

}

