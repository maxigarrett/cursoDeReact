import {React} from 'react';

export const Dashboard=()=>{
    const validate=false
    return (
        <>
        {/*retornamos lo que queremos mostrar al usuario si del fomulario vendria un true y tambien
        pasamos esa variable true para validar en privateRoute.js simpre arriba de todo para poder acceder
        como un array desde la posicion [0] porque si va abajo del todo y seguiriamos pomiendo elementos
        se correria de posicion*/}
            {validate}
            <h2>validado</h2>
        
        </>
        )
}