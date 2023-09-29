import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const[mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!Number(presupuesto) || Number(presupuesto) <0 ){
      setMensaje('no es un presupuesto valido')
    }else{
      setMensaje('si es un presupuesto valido')
    }


  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={(e) => setPresupuesto(e.target.value)}
                ></input>
            </div>

            <input type='submit' value='Añadir'>
            </input>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        </form>
    </div>
  )
}

export default NuevoPresupuesto