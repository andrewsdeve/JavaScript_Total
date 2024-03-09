Práctica: Introducción a Eventos 1
script.js

    function agregarEvento() {
        let boton = document.getElementById("miBoton");
        
        boton.addEventListener('click', function() {
            console.log("Boton presionado");
        });
    }


Práctica: Introducción a Eventos 2
script.js

    function agregarEvento() {
        let boton = document.getElementById("miBoton");
        
        boton.addEventListener('click', function() {
            alert("Click realizado");
        });
    }


Práctica: Eventos 3
script.js

    function agregarEvento() {
        let boton = document.getElementById('miBoton');
        
        boton.addEventListener('click', informacion);
    }
     
    function informacion(event) {
        console.log(event.target.nodeName);
    }


Práctica: Eventos 4
script.js

    function agregarEvento() {
        let a = document.getElementById('miLink');
        
        a.addEventListener('click', cancelar);
    }
     
    function cancelar(event) {
        event.preventDefault();
    }


Práctica: Eventos de Teclado 1
index.js

    function agregarEvento() {
        let input = document.getElementById("miInput");
        
        input.addEventListener('keypress', function(event) {
            console.log(event.key);
        });
    }


Práctica: Eventos de Teclado 2
index.js

    function agregarEvento() {
        let input = document.getElementById("miInput");
        
        input.addEventListener('keydown', validate);
    }
     
    function validate(event) {
        if(event.key == 32) {
            event.preventDefault();
        }
    }


Práctica: Eventos del Ratón 1
index.js

    function agregarEvento() {
        let boton = document.getElementById("miBoton");
        
        boton.addEventListener('mouseover', function() {
            console.log("Mouse sobre botón");
        });
    }


Práctica: Eventos del Ratón 2
index.js

    function agregarEvento() {
        let boton = document.getElementById("miBoton");
        
        boton.addEventListener('mouseout', function() {
            console.log("Mouse por fuera de botón");
        });
    }


Práctica: Eventos en Tiempo Real 1

    let socket = new WebSocket('ws://localhost:8080');
    socket.send("¡Hola mundo!");


Práctica: Eventos en Tiempo Real 2

    let socket = new WebSocket('ws://localhost:4200');
    socket.onmessage = function(event) {
        console.log(event.data);
    }


Práctica: Eventos Personalizados 1
script.js

    function agregarEvento() {
        let boton = document.getElementById('miBoton');
     
        boton.addEventListener('click', function() {
            let evento = new CustomEvent('mostrarMensaje');
            boton.dispatchEvent(evento);
        });
        
        boton.addEventListener('mostrarMensaje', function() {
           console.log("Boton presionado"); 
        });
    }


Práctica: Eventos Personalizados 2
script.js

    function agregarEvento() {
        let enlace = document.getElementById('miEnlace');
     
        enlace.addEventListener('click', function() {
            let evento = new CustomEvent('alertarRedireccion');
            enlace.dispatchEvent(evento);
        });
        
        enlace.addEventListener('alertarRedireccion', function() {
           alert("Redireccion activada"); 
        });
    }