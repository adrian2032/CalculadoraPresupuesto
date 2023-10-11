import React from "react";

const controlPresupuesto = ({presupuesto})  => {

    const formatearCantidad = ( cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <div>
                    <p>
                        <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                    </p>
                    <p>
                        <span>Disponible:  </span> {formatearCantidad(0)}
                    </p>
                    <p>
                        <span>Gastado: </span> {formatearCantidad(0)}
                    </p>
                </div>

            </div>

        </div>
    )
}
export default controlPresupuesto