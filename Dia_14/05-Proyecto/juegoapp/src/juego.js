import React from 'react';

function Juego(props){
    let [numeroUsuario,SetNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1 );

    function comprobarNumeroUsuario(evento){
        SetNumeroUsuario(evento.target.value);

    }

    function comprobarNumeroMaquina(){
        if(numeroUsuario === numeroMaquina){
            alert('Adivinaste')
        }else{
            alert('Fallaste' + numeroMaquina);
        }
        setTimeout(Math.floor(Math.random() * props.limite) + 1 );
    }
    return(
        <div>
            <p>Elije un Numero de 1 al 10</p>
            <input type = "number" placeholder='Ingresa tu apuesta' min={1} max={10}onChange={comprobarNumeroUsuario}></input>;
            <br/>
            <button onClick={comprobarNumeroMaquina}>Adivinar</button>
        </div>
    )
}
export default Juego;