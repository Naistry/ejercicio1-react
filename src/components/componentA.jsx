import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ComponentA = ({contacto}) => {
  return (
    <div>
        <h1>Nombre: {contacto.nombre} </h1>
        <h1>Apellido: {contacto.apellido}</h1>
        <h1>E-mail: {contacto.email}</h1>
        <h1>Conectado: {contacto.conectado ?'Está conectado':'No conectado'}</h1>
    </div>
  )
}

ComponentA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponentA