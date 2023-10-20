import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar,  setGastoEditar] = useState({})

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0)
      handleNuevoGasto()
      console.log('gasto editar tiene algo')
  }, [gastoEditar])

  const handleNuevoGasto = () =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }

  const guardarGasto = gasto => {
    gasto.id = generarID();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() =>{
        setModal(false)
    }, 1000)
  }

  return (
  <div className={modal ? 'fijar' : ''}>
    <Header
      gastos={gastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
    ></Header>

    {isValidPresupuesto && (
      <>
        <main>
          <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
          ></ListadoGastos>
        </main>
        <div className='nuevo-gasto'>
        <img
        src={IconoNuevoGasto}
        alt='icono nuevo gasto'
        onClick={handleNuevoGasto}

        ></img>
        </div>
      </>
    
    )}
    {modal && <Modal
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      ></Modal>}
    
  </div>
  )
}

export default App
