import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'
import Modal from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  
  const [gastos, setGastos] = useState([
    ...(JSON.parse(localStorage.getItem('gastos')) ?? [])
  ])


  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar,  setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  
  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0)
      setModal(true)


      setTimeout(() => {
        setAnimarModal(true)
      }, 1000)
  }, [gastoEditar])


  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect( () => {
    localStorage.setItem('gastos', JSON.stringify((gastos) ?? []))
  }, [gastos] )

  useEffect( () => {
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
      console.log(gastosFiltrados)
    }
  }, [filtro])

  useEffect( () => {
    const presupyestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupyestoLS > 0){
      setIsValidPresupuesto(true)
    }

  }, [])


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
          <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
          ></Filtros>
          
          <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
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
