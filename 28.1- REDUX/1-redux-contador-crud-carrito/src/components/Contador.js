import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restar, restar5, sumar, sumar5 } from '../actions/contadorActions'


export const Contador = () => {
    // este use selector es el que me va a permitir acceder al estado de REDUX
    // const state = useSelector(state => state) mejor la forma de abajo
    // console.log(state) mostrara un obj que contiene la variable contador por ahora que almacena el reducer
     
    
    const contador = useSelector(state => state.contador)

     

    //necesita pasarle una funcion a el hook useDispatch entonces se lo pasamos cuando llamamos a dispacth
    //y le pasamos las funciones de sumar, restar,etc
    const dispatch = useDispatch()
    return (
        <>
            <h2>Contador</h2>
            <nav>
                <button onClick={()=>dispatch(sumar())}>1</button>
                <button onClick={()=>dispatch(sumar5())}>5</button>
                <button onClick={()=>dispatch(restar())}>-1</button>
                <button onClick={()=>dispatch(restar5())}>-5</button>
            </nav>
            <p>{contador}</p>
        </>
    )
}
