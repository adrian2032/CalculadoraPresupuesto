import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';

const Headers = ({ presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        ></NuevoPresupuesto>
    </header>
  )
}

export default Headers