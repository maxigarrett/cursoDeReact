
import React, { useReducer} from "react"

const initialState={contador:0}

//las buenas practicas nos dicen que tenemos que crear un obj con las propiedades como la queramos
//nombrar y usar esas tanto en el switch como en el dispach. Por lo tanto se remplaza :
// case 'INCREMENT': por case TYPES.INCREMENTS:
//es decir crearemos un objeto con las propiedades que nuestra app va hacer
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

    const[state,dispach]= useReducer(reducer,initialState)

    //En el dispach le podemos pasar tantos propiedades como querramos y nos permite modificar el estado
    const sumar=()=> dispach({type:TYPES.INCREMENT});
    const restar=()=> dispach({type:TYPES.DECREMENT});

    //el payload se usa para poder modificar la variable creandola como propiedad de obj type que lo
    //tomara el action que tiene como propiedad de la funcion reducers
    const incrementar5=()=> dispach({type:TYPES.INCREMENT_5,payload:5});
    const decrementar5=()=> dispach({type:TYPES.DECREMENT_5,payload:5});

    const reset=()=> dispach({type:TYPES.RESET});


    return(
        <div style={{textAlign:'center',marginTop:'10px'}}>
            <button onClick={incrementar5} >+5</button>
            <button onClick={sumar} >Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={decrementar5}>-5</button>
            <button onClick={reset}>Reset</button>
            <h2>{state.contador}</h2>
        </div>
    )
}