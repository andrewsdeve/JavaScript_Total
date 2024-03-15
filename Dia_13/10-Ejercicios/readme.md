## EJERCICIOS DESARROLLADOS

Soluciones a las Prácticas del Día 13


Antes de dar por finalizadas las prácticas del día de hoy y pasar al proyecto, te comparto las posibles soluciones para cada una de las prácticas que fueron propuestas el día de hoy, en caso de que hayas tenido alguna dificultad para terminarlas.

¡Ten en cuenta que estas soluciones no son únicas! Si has arribado por otro camino a un código que arroja un resultado correcto en VS Code o tu editor de código preferido, quiero que sepas que has hecho un buen trabajo (no siempre pueden contemplarse todos los casos a la hora de evaluar una tarea).


Práctica: Callbacks 1

    function test(callback) {
        setTimeout(function() {
            callback("Hola mundo");
        }, 2000);
    }
     
    function imprimir(mensaje) {
        console.log(mensaje);
    }


Práctica: Callbacks 2

    function test(callback) {
        setTimeout(function() {
            callback();
        }, 1500);
    }
     
    function mensaje() {
        alert("Mensaje impreso");
    }


Práctica: Promesas 1

    let promesa;
     
    function test(resultado) {
        promesa = new Promise(function(resolve, reject) {
            if(resultado) {
                resolve("Correcto");
            }
            else {
                reject("Error");
            }
        });
    }


Práctica: Promesas 2

    function getDatos(url) {
        return new Promise(function(resolve, reject){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject("Error");
                }
            }
            xhr.send();
        })
    }


Práctica: Async / Await 1

    async function request(url) {
        let response = await fetch(url);
        return await response.json();
    }


Práctica: Async / Await 2

    async function request(url) {
        let respuesta = await fetch(url);
        return await respuesta.json();
    }


Práctica: Errores Asincronía 1

    async function tablaDelCinco(numero) {
        if(numero === 0) {
            throw new Error("Error de calculo");
        }
        else {
            return 5*numero;
        }
    }
     
    async function manejarErrores() {
        try {
            let resultado = tablaDelCinco(0);
            console.log(resultado);
        } catch (error) {
            console.error(error);
        }
    }


Práctica: Errores Asincronía 2

    function tablaDelCinco(numero) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                if(numero === 0) {
                    reject(new Error("Error"));
                }
                else {
                    resolve(5*numero);
                }
            }, 1000);
        })
    }
     
    function manejarErrores() {
        tablaDelCinco(0)
        .then(function(respuesta) {
            console.log(respuesta);
        }).catch(function(error) {
            console.error(error);
        })
    }