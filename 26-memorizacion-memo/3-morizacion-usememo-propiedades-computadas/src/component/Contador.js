import { useCallback, useState } from "react"
import {ContadorHijo} from "./ContadorHijo";

export const Contador=()=>{
    const [contador,setContador]=useState(0);
    const [input,setInput]=useState('');

    const aumentarContador= useCallback(()=>setContador(contador +1),[contador])
    const decrementarContador= useCallback(()=>setContador(contador -1),[contador])


    const handelChange =(e)=> setInput(e.target.value)

    return(
        <div>
            <nav>
                <ul>
                    <li>Se encarga de memorizar un componente</li>
                    <li>Lo vuelve a memorizar al momento de que sus props cambian</li>
                    <li>Hay que evitarlo en la medida de lo posible,pues podria ser mas costosa la tarea
                        de memorizacion que el de re-renderizado del compoenente.
                    </li>
                    <li>Usalo cuando:</li>
                    <li>
                        <ul>
                            <li>tenemos muchos elementos rerendizados en una lista.</li>
                            <li>llamamos datos a APIS</li>
                            <li>Un componente se vuelve muy pesado</li>
                            <li>Salen alertas de rendimiento en la consola</li>
                        </ul>
                    </li>
                    <br/>
                    <br/>
                    <li><a href='https://es.reactjs.org/docs/hooks-reference.html#usecallback'>useCallback(doc)</a></li>
                    <li>Memoriza una funcion, para no volver a definir en cada render</li>
                    <li>Usalo siempre que se pase una funcion como <b> prop</b>en un componente memorizado</li>
                    <li>Usalo siempre que se pase una funcion como parametro de un efecto</li>
                    <br/>
                    <br/>
                    <li><a href='https://es.reactjs.org/docs/hooks-reference.html#usememo'>useMemo(doc)</a></li>
                    <li>Memoriza una valor calculado,es decir, el resultado de una funcion</li>
                    <li>genera propiedades computadas</li>
                    <li>Usalo en procesos pesados</li>
                </ul>
            </nav>

            <div style={{textAlign:'center'}}>
                <h2>Contador</h2>
                <button onClick={aumentarContador}>Aumentar</button>
                <button onClick={decrementarContador}>Decrementar</button>
                <h3>{contador}</h3>
                <input type='text' onChange={handelChange} value={input}/>
                <ContadorHijo 
                    contador={contador} 
                    aumentarContador={aumentarContador}
                    decrementarContador={decrementarContador}
                />

            </div>
        </div>
    )
}