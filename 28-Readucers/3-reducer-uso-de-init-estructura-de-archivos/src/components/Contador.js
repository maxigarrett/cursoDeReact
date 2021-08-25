
import React, { useReducer} from "react"

const initialState={contador:0};

//transformamos la variable inicial
const init=(initialState)=>{
    return {
        contador:initialState.contador + 100
    }
}

const TYPES={
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT',
    INCREMENT_5:'INCREMENT5',
    DECREMENT_5:'DECREMENT5',
    RESET:'RESET'
}

const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case TYPES.INCREMENT:
            return {contador: state.contador+1}
        case TYPES.DECREMENT:
            return {contador: state.contador-1}
        case TYPES.INCREMENT_5:
            return {contador: state.contador+ action.payload}//aumenta de 5 en 5
        case TYPES.DECREMENT_5:
            return {contador: state.contador- action.payload}//disminuye de 5 en 5
        case TYPES.RESET:
            return initialState//reset a 0
        default:
            return state
    }
}
export const Contador=()=>{

    /*el tercer parametro de useReducer se lo denomina init y se usa para que antes de establecer el
    valor inicial con la variable initialState, hacerle alguna modificacion o cambio por ejemplo, antes
    de recibir un numero nuestra app necesita sumarle uno puntos decimales por el valor del dolar,etc.
    en este caso nuestra initialState arranca de 0 y vamos a modificarla para que arranque en 100
    ESE INIT SOLO ES PARA CUANDSO SE MONTE EL COMPONENTE y es opcional y no se suele usar casi nunca*/
    const[state,dispach]= useReducer(reducer,initialState,init)

    //En el dispach le podemos pasar tantos propiedades como querramos y nos permite modificar el estado
    const sumar=()=> dispach({type:TYPES.INCREMENT});
    const restar=()=> dispach({type:TYPES.DECREMENT});

    const incrementar5=()=> dispach({type:TYPES.INCREMENT_5,payload:5});
    const decrementar5=()=> dispach({type:TYPES.DECREMENT_5,payload:5});

    const reset=()=> dispach({type:TYPES.RESET});


    return(
        <div style={{textAlign:'center',marginTop:'10px'}}>
            <h2>Contador Reducer</h2>
            <button onClick={incrementar5} >+5</button>
            <button onClick={sumar} >Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={decrementar5}>-5</button>
            <button onClick={reset}>Reset</button>
            <h2>{state.contador}</h2>
        </div>
    )
}