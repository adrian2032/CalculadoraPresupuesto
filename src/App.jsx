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
      setModal(true)


      setTimeout(() => {
        setAnimarModal(true)
      }, 1000)
  }, [gastoEditar])

  const handleNuevoGasto = () =>{
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      const gastosActualizado = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizado)
      setGastoEditar({})
      

    }else{ 
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])

    }   

    setAnimarModal(false)

    setTimeout(() =>{
        setModal(false)
    }, 1000)
  }

  const eliminarGasto = id =>{
    const gastosActualizado = gastos.filter(gasto => gasto.id !== id)
      setGastos(gastosActualizado)
    
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
            eliminarGasto={eliminarGasto}
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
      gastoEditar={gastoEditar}
      setGastoEditar={setGastoEditar}
      ></Modal>}
    
  </div>
  )
}

export default App
