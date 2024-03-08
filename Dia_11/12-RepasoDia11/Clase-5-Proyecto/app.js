let datosJson;

fetch('cliente.json') // Cargar el archivo clientes.json desde la carpeta del proyecto
.then(response => response.json())
.then((data) =>{
    datosJson = data;
    let elementoBanco = document.getElementById("bancoCliente").textContent = datosJson.banco;
    let elemntoSucursal = document.getElementById("sucursalCliente").textContent = datosJson.sucursal;
    let elementoTitular = document.getElementById("titularCliente").textContent = datosJson.titular;
    let elementoNroCuenta = document.getElementById("nro-cuentaCliente").textContent = datosJson.nro_cuenta;
    let elementoSaldo = document.getElementById("saldocliente").textContent = datosJson.saldo[0].monto + " USD ";
    let elementoSaldo2 = document.getElementById("saldocliente2").textContent = datosJson.saldo[1].monto + " EU"; 
    let elementoCbu = document.getElementById("cbuCliente").textContent = datosJson.cbu;
    let elementoAbierto = document.getElementById("abiertoCliente").textContent = datosJson.abierto;
})
.catch(function(error){
    alert(error)
})