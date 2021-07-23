import {React} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Productos=()=>{
    //el useLocation devulve un objeto con las propiedades 
    //pathname: "/productos", search: "?inicio=lms", hash: "", state:null
    //caundo le pasamos parametros a la url de esta manera:
        //     http://localhost:3000/productos?inicio=1&fin=20
    //en ese objeto por consola motrara:
            // pathname: "/productos", search: "?inicio=1&fin=20", hash: "", state: undefined 
    //osea que en el serach detecta el queryParam que le estamos pasando y tendremos que estraer el
    //sear del useLocation
    let location= useLocation();
    // console.log(location)
    const{search}=location//se gaurdan los parametros de consulta en el search
    let query=new URLSearchParams(search);//serializamos lo que capturamos del search
    const LIMIT=20;
    let start=parseInt(query.get('inicio'))||1//obtenemos los parametros de la URL para rescatar su valor
    let end=parseInt(query.get('fin'))||LIMIT//obtenemos los parametros de la URL para rescatar su valor
    
    
    //para manejar el historial de la url y tiene diferentes metodos como push o Location
    //que en Location devulve un objeto con la propiedad search que contiene los parametros de la URL
    //el push() modifica la los valores de los parametros en este caso tenemos inicio=1 fin=20 una paginacion
    let history=useHistory();
    console.log(history)


    const handelPrev=(e)=>{
        history.push({
            search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`
        })
    }
    const handelNext=(e)=>{
        //push() crea objeto que modifica la url del navegador y le pasamos los valores originales que
        //son 1 y 20(puesto en la url por nosotros) y le sumamos LIMIT para que avance de 20 en 20
        history.push({
            search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`
        })
    }
    return(
        <>
            <h3>Productos</h3>
            <p>MOstrando Producto del<b>{start}</b>al<b>{end}</b></p>
            {/*cuando retrocedemos y el parametro inicio almacenado en start llega a ser
            menor que el LIMIT que es 20 se ocultara el boton para retoceder la paginacion*/}
            {start>=LIMIT?<button onClick={handelPrev}>atras</button>:null}
            <button onClick={handelNext}>adelante</button>
        </>
    )
}