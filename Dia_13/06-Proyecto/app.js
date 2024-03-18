// SE DEBEN CREAR 4 FUNCIONES ASI:
/*

1. FUNCION consultaCotizaciones() => limpiara todo el html para que cargue los datos actualizados

2. funcion cargarDatos() => obtiene todas las cotizaciones que se necesitan 

3. funcion cargar valoresHtml() => Cargara lo referente al titulo y logo

4. funcion mostrarCotizaciones() => se encargara de mostrar las cotizaciones y que vaya cargando los tecxtos informativos de USD a EURO a USD y Bitcoin a USD.
*/

async function consultaCotizaciones(){
    let dolarEuro = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosDolarEuro = await dolarEuro.json();

    let dolarBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let datosDolarBitcoin = await dolarBitcoin.json();

    let dolarPeso = await fetch("https://open.er-api.com/v6/latest/ARS");
    let datosDolarPeso = await dolarPeso.json();

    console.log(datosDolarEuro,datosDolarBitcoin,datosDolarPeso);
};

consultaCotizaciones();

