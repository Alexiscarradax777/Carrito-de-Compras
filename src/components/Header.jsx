/** Importar Librerias o Componentes */

import React from 'react'

export default function Header() {

    /** STATE O FUNCIONES */

    const name = 'Alexis'
    const Total = 100

    return (

        /** HTAML O VISTA */
        <React.Fragment>
        
        <p>Mi nombre es  {name} </p>
        <p>Tengo que pagar  {Total} </p>
        
        </React.Fragment>
    )

}
