import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }

  const guardarGasto = gasto => {
    gasto.id = generarID()
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() =>{
        setModal(false)
    }, 1000)
  }

  return (
  <div>
    <Header
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
