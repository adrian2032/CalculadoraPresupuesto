import CerarrBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { useState, useEffect } from 'react'

const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto, 
    gastoEditar
}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])

    const ocultarModal = () =>{
        setAnimarModal(false)

        setTimeout(() =>{
            setModal(false)
        }, 1000)
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('todos los campos son obligatorios')

            setTimeout(() =>{
                setMensaje('')
            }, 3000)
            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

  return (
    <div className="modal">
       <div className="cerrar-modal">
            <img
                src={CerarrBtn}
                alt='cerrar modal'
                onClick={ocultarModal}
            ></img>
       </div>
       <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
        >
        <legend>{gastoEditar.nombre ? 'editar gasto' : 'nuevo gasto'}
        </legend>
        {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}

        <div className='campo'>
            <label htmlFor='cantidad'> Nombre Gasto </label>
                <input
                    id='nombre'
                    type='text'
                    placeholder='Añade el nombre del gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                ></input>

            <label htmlFor='cantidad'> Cantidad </label>
                <input
                    id='cantidad'
                    type='number'
                    placeholder='Añade la cantidad del gasto'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                ></input>
        </div>
        <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>

            <select
                id='categoria'
                value={categoria}
                onChange={ e => setCategoria(e.target.value)}
            >
                <option value="" >-- Seleccione</option>
                <option value="ahorro" > Ahorro</option>
                <option value="comida" > Comida</option>
                <option value="casa" > Casa</option>
                <option value="gastos" > Gastos Varios</option>
                <option value="ocio" > Ocio</option>
                <option value="salud" > Salud</option>
                <option value="suscripciones" > Suscripciones</option>

            </select>
        </div>

        <input
            type='submit'
            value={gastoEditar.nombre ? 'guardar gastos' : 'añadir gasto'}
        ></input>

       </form>
    </div>
  )
}

export default Modal