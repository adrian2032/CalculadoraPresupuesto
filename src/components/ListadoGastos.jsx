import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
      gastos, 
      setGastoEditar, 
      eliminarGasto,
      filtro,
      gastosFiltrados
  }) => {
  return (
      <div className='listado-gastos contenedor'>
         

          
          {
            filtro ? (
              <> 
                <h2>{gastosFiltrados.length ?  'gastos' : 'no hay gastos en esta categoria'}</h2>
                {gastosFiltrados.map(gasto =>(
                  <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
    
                  ></Gasto>))}
            </>
              
            ) : (

              <>
                  <h2>{gastos.length ?  'gastos' : 'no hay gastos aún'}</h2>
                  {gastos.map(gasto =>(
      
                  <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}

                ></Gasto>
                ))}
              </>
              
            )
          }
          
      </div>
  )
}

export default ListadoGastos