/*EL Redireccionamiento sirve por ejemplo cuando un usuario en una aplicacion tiene que autenticarce
para poder acceder a un contenido especifico de la app. Entonces cuando el usuario llene el formulario
de login si esos datos son incorrecto lo redireccionamos a la misma pagina sino a otra pagina, o cuando
cerramos una parte de la aplicacion y cuando el usuario entre que lo rediriga automaticamente a la nueva
seccion, para eso necesitamos las redirecciones. el componente es <REDIRECT/>*/ 
import {React} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Productos=()=>{
    let location= useLocation();
    // console.log(location)
    const{search}=location
    let query=new URLSearchParams(search);
    const LIMIT=20;
    let start=parseInt(query.get('inicio'))||1
    let end=parseInt(query.get('fin'))||LIMIT
    
    let history=useHistory();
    console.log(history)


    const handelPrev=(e)=>{
        history.push({
            search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`
        })

    }
    const handelNext=(e)=>{
        history.push({
            search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`
        })
    }
    return(
        <>
            <h3>Productos</h3>
            <p>MOstrando Producto del<b>{start}</b>al<b>{end}</b></p>
            {start>=LIMIT?<button onClick={handelPrev}>atras</button>:null}
            <button onClick={handelNext}>adelante</button>
        </>
    )
}