import { useCallback, useState } from "react"
import {ContadorHijo} from "./ContadorHijo";

export const Contador=()=>{
    const [contador,setContador]=useState(0);
    const [input,setInput]=useState('');

    //------------------------------------IMPORTANTE--------------------------------------
    // const aumentarContador =()=> setContador(contador +1)
    // const decrementarContador =()=> setContador(contador -1)

    //remplazamos las funciones normles llamando las nbuevas por el mismo nombre y usamos useCallback
    //para memorizar estas. funcionan parecido a useEffect ya que las dependecias que se actualiza
    //va dentro del un array. Cualquier memorizacion se hace despues de hacer toda la logica
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

                    {/*nos enfocamos en este ejemplo
                    ----------------------------IMPORTANTE-------------------------------------
                    USECALLBACK sirve para memorizar funciones ya que podemos evitar que se re-renderice
                    componentes de gusto al actualizar alguna variable con una funcion. y hace que
                    el padre se actualice re-renderizando todo sus componentes hijos de nuevo sin 
                    necesidad. al pasar funciones como propiedad a un componente hijo este se 
                    re-renderizara cuando actualicemos cualquier variable de estado aunque no
                    se la pasamos como prop al componente hijo. osea ya con que el componente tenga
                    funciones el hijo se re-renderizara por mas que tenga la funcion MEMO al actualizar
                    variables que no tenga como propiedad.
                    ya que un componente padre se va a re-renderizar cada ves que una variable de estado 
                    cambie. entonces se vuelve a rerenderizar las funciones de aumentar y decrementar
                    y entonces si un compoennte hijo le pasamos esas funciones. el compoenente hijo se
                    re-renderizara de gusto por mas que no utilicemos esas funciones y solo utilicemos
                    la de el input que solo actualisa el estado de ese input y nada mas pero hace
                    actualizar al componente padre ya que actualiza el estado del input*/}
                    <li><a href='https://es.reactjs.org/docs/hooks-reference.html#usecallback'>useCallback</a></li>
                    <li>Memoriza una funcion, para no volver a definir en cada render</li>
                    <li>Usalo siempre que se pase una funcion como <b> prop</b>en un componente memorizado</li>
                    <li>Usalo siempre que se pase una funcion como parametro de un efecto</li>
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