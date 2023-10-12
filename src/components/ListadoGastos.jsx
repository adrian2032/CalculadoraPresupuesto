import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ?  'gastos' : 'no hay gastos aún'}</h2>

        {gastos.map(gasto =>(
            <Gasto
            key={gasto.id}
                gasto={gasto}

            ></Gasto>
        ))}
    </div>
  )
}

export default ListadoGastos