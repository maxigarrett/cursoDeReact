//va sin mayuscula el nombre del archivo ya que no sera un componente
//como puede haber varios reducer se sugiere que lleve el nombre descriptivo de lo que hace
import {TYPES} from '../actions/contadorActions'
export const ContadorInitialState={contador:0};

//transformamos la variable inicial
export const Contadorinit=(initialState)=>{
    return {
        contador:initialState.contador + 100
    }
}
export const contadorReducer=(state,action)=>{
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
            return ContadorInitialState//reset a 0
        default:
            return state
    }
}