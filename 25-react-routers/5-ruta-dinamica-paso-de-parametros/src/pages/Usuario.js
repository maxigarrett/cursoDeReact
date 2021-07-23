import {React} from "react";
import { useParams } from "react-router-dom";

export const Usuario=()=>{
    //-------------------IMPORTANTE LEER PRIMERO LO DE Usuario.js Y DESPUES ESTO
    //useParams devuelve un objeto con los parametros de la ruta que se le aya enviado desde por ejemplo
    //MenuRouter.js que llamamos a este archivo dentro de una Route y le pasamos por parametro un nombre
    //y edad y devuelve este useParam un objeto con eso dos parametros de nombre y edad que le pasamos
    //en la ruta 
    // let params=useParams();
    // console.log(params)veremos por consola el valor de los parametros de la url en forma de obj
    let {userName,age}=useParams();
    return(
        <>
            <h3>Perfil del usuario</h3>
            <p>Nombre de usuario <b>{userName}</b> edad <b>{age}</b></p>
        </>
    )
}