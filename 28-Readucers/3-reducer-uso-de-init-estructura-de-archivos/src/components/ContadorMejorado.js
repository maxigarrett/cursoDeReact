// LEER LA EXPLICACION DE contadorReducer.js y contadorActions.js 
import React, { useReducer} from "react"
import { Contadorinit,contadorReducer,ContadorInitialState } from "../reducers/contadorReducer";
import {TYPES} from '../actions/contadorActions';


export const ContadorMejorado=()=>{
    const[state,dispach]= useReducer(contadorReducer,ContadorInitialState,Contadorinit)

    const sumar=()=> dispach({type:TYPES.INCREMENT});
    const restar=()=> dispach({type:TYPES.DECREMENT});

    const incrementar5=()=> dispach({type:TYPES.INCREMENT_5,payload:5});
    const decrementar5=()=> dispach({type:TYPES.DECREMENT_5,payload:5});

    const reset=()=> dispach({type:TYPES.RESET});


    return(
        <div style={{textAlign:'center',marginTop:'10px'}}>
            <h2>Contador mejorado Reducer estructura de archivo</h2>
            <button onClick={incrementar5} >+5</button>
            <button onClick={sumar} >Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={decrementar5}>-5</button>
            <button onClick={reset}>Reset</button>
            <h2>{state.contador}</h2>
        </div>
    )
}