import React from 'react'

import ComponetB from './componetB'
import { Contacto } from '../models/contacto.class'

const ComponentA = ()=> {
    const contacto = new Contacto("Martin", "Pastorino", "Example", false);
  return (
    <div>
        
       <ComponetB contacto={contacto}></ComponetB>
    </div>
  )
}



export default ComponentA