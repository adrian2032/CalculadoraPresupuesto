import React from "react";

const controlPresupuesto = ({presupuesto})  => {

    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <div>
                    <p>
                        <span>Presupuesto: </span> ${presupuesto}
                    </p>
                </div>

            </div>

        </div>
    )
}
export default controlPresupuesto