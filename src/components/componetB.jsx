import React from 'react'
import { Contacto } from '../models/contacto.class'
import ComponentA from './componentA';

const ComponetB = () => {

    const contacto = new Contacto('Martín','Pastorino','example@example',false);

  return (
    <div>
        <h1>Conctato: </h1>
        <ComponentA contacto={contacto}></ComponentA>
    </div>
  )
}



export default ComponetB