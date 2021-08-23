/*Reducer: cuando las variables de estado se vuelve un poco o muy complejas es mejor utilizar Reducer 
para manejar el estado. tambien existen librerias como Redux,entre otras. pero a diferencia de Reducers
que lo trae React nativamente las demas son librerias externas que hay que importar dentro de nuestra
app de React

Reducer es una funcion pura ,es decir, que devolvera o retornara algun valor. Tambien la logica que
se encutra dentro de ella es capas de resolver un solo procesamiento. Y eso significa que no va a afectar
cosas externas es decir su programacion no va a afectar cosas que esten fuera de esa funcion. tampoco 
generara efectos secundarios ni internamente o externamente.

Reducer siempre van a retornar un valor que se va a considerar el estado de nuestra aplicacion y no 
podemos crear efectos es decir useEffect dentro de las funciones reductoras y tampoco podemos hacer
peticiones asicronas como consultas a BBDD o APIs dentro de estas funciones reductoras o reducers. se
tienen que hacer fuera de ellas */
import React, { useReducer, useState } from "react"

const initialState={contador:0}

/*una funcion reductora recibe por parametro el estado anterior y un obj que se llamara action. este 
action sera un tipo de obj accion que se va a ejecutar y adicionalmente podria tener o no un belou, 
este belou es como el valor que le estamos pasando para que modifique el estado. Y esta funcion reductora
siempre va a retornar el estado
los parametros los podemos nombrar como queramos pero toma los valores de la  state como primer parametro
y action toma los valores de dispatch como segundo parametro*/
const reducer=(state,action)=>{
    //para saber el tipo de action que ara se utiliza un switch por convencion en ves de if y else
    //no hace falta utilizar el break ya que no necesita romper nada porque la funicon reductora
    //retornara un valor
    switch(action.type){
        case 'INCREMENT':
            return {contador: state.contador+1}
        case 'DECREMENT':
            return {contador: state.contador-1}
        default:
            //retornara el valor original si no se hace nada o pulse otra cosa que no sea el boton 
            // INCREMENT o DECREMENT
            return state
    }
}
export const Contador=()=>{
    // const [contador,setCotador]=useState(0) remplazamos por reducer

    /*useReducer pide que de su hook useReducer destructuremos un state o estado que se sugiere que sea 
    un obj, (en ves de una variable de estado como en useState). y dispach es una funcion que va a 
    despachar la actualizacion(seria el setContador del hook useState).

    El Hook useReducer recibe como parametro 3 parametros, primero la funcion reductora(reducer) va fuera
    del componente, la inicializacion. el valor inicial del estado(initialState) que se sugiere que sea
    un obj con la propiedad nombrada como queramos en este caso se llamara contador.
    el tercer parametro es una funcion que se denomina init que nos permite transformar el valor del
    estado inicial para que ya cargue con ese valor o tranformacion del estado inicial y es opcional
    
    reducer es una funcion que tomara los valores que tiene como parametro de const[state,dispach] */
    const[state,dispach]= useReducer(reducer,initialState)

    // const sumar=()=> setCotador(contador +1);
    // const restar=()=> setCotador(contador -2);

    //funciones actualizadoras utilizando reducers
    //el dispatch recibira el obj de la accion que se va a lanzar en este caso nuestra accion seria
    //INCREMENT y DECREMENT
    //este objeto con la propiedad type con su valor lo evaluara la funcion reductora
    const sumar=()=> dispach({type:'INCREMENT'});
    const restar=()=> dispach({type:'DECREMENT'});
    return(
        <div style={{textAlign:'center',marginTop:'10px'}}>
            <button onClick={sumar} >Sumar</button>
            <button onClick={restar}>Restar</button>
            <h2>{state.contador}</h2>
        </div>
    )
}