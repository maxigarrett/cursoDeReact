/*useState permite manipular el estado de un componente funcional. se comporta como el objeto state
y a la funcion this.setState(de los componentes basados en clases)

en nuestro componente funcional vamos a inicializar el hook, para ello asignaremos midiante la
destructuracion de arreglos 2 elementos.
1-el valor del estado
2-un metodo para actualizarlo

--------------------LLAMAR AL METODO O FUNCION------------------------------------
lo llamaremos utilizando una constante y declararemos un arreglo donde le pasaremos 2 valores
el primero sera el nombre de la variable(VALOR) y segundo el metodo o funcion que se va a llamar
para modificar ese valor(SETVALOR). Que por convencion se tiene que poner 'set' y el nombre de la 
variable a modificar. Luego inicializamos el valor de la variable con useState(0) en este caso la
iicializamos en 0
const [valor,setValor]= useState(0)
*/


import React,{useState} from 'react';

//no se puede usar arrow funtion para usar los Hooks 
export default function ContadorHooks()
{
    const [contador,setContador]=useState(0);

    //llamamos a setContador() para llamar dentro la variables en este caso (contador) y le sumamos
    // 1 y lo almacenamos dentro de la funcion sumar y restar  
    const sumar=()=>setContador(contador +1)
    const restar=()=>setContador(contador -1)
    
    // no necesitamos render como en las clases. return se tranforma en ese render
    return(
        <>
            <h2>Hooks - useState</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <h3>{contador}</h3>
            {contador===0?<p>ace clic</p>:<p>{`hiciste ${contador} clics`}</p>}
        </>
    )
}

