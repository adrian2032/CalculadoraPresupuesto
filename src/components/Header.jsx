import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Headers = ({ presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto
  }) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (<ControlPresupuesto
          presupuesto={presupuesto}
        ></ControlPresupuesto>) : (
          <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        ></NuevoPresupuesto>  
        )
        }  
        
    </header>
  )
}

export default Headers