import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class';

const ComponetB = ({contacto}) => {

    const[conectado, setConectado] = useState(contacto.conectado);

    const conectar = ()=>{
        if(conectado === false){
            setConectado(true);
        }else {
            setConectado(false);
        }
    }
  return (
    <div>
        <h2>Nombre: {contacto.nombre}</h2>
        <h2>Apellido: {contacto.apellido} </h2>
        <h2>E-mail: {contacto.email}</h2>
        <h2>in line: {conectado?'En linea':'Desconectado'}</h2>
        <button onClick={conectar}>Conectar</button>
    </div>
  )
}

ComponetB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponetB