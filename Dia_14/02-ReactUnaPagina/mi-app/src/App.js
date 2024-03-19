import React from 'react';
import Saludo from './saludo';
import Mensaje from './Mensaje';

function App(){
  return(
    <div>
      <Saludo nombre = 'Juan'/>
      <Mensaje mensaje = "Bienbenido a mi App React"/>
    </div>
  )
}

export default App;
