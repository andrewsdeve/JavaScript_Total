let nombre = prompt("Ingrese Su Nombre: ")
let cantidadConvertir = Number(prompt("Cuantos Pesos Colombianos deseas Convertir"))
let bitcoin = 277.334.709.20;
let dolarAmericano = Number(3,947.87);
let euro = Number(4,279.37);
let copEuro = cantidadConvertir / euro;
let copBitcoin = cantidadConvertir / bitcoin;
let copDolar = cantidadConvertir / dolarAmericano;

alert(`Hola, ${nombre}! ${cantidadConvertir}COP,  equivalen a ${copBitcoin.toFixed(2)} Bitcoins`);
alert(`Hola, ${nombre}! ${cantidadConvertir} COP,  equivalen a ${copEuro.toFixed(2)} Euros`);
alert(`Hola, ${nombre}! ${cantidadConvertir} COP,  equivalen a ${copDolar.toFixed(2)} Dolares`);





