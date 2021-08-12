import { useState } from "react"
import {ContadorHijo} from "./ContadorHijo";

export const Contador=()=>{
    const [contador,setContador]=useState(0);

    const aumentarContador =()=> setContador(contador +1)
    const decrementarContador =()=> setContador(contador -1)

    return(
        <>
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
                </ul>
            </nav>
            <h2>Contador</h2>
            <button onClick={aumentarContador}>Aumentar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <h3>{contador}</h3>
            <ContadorHijo/>
        </>
    )
}