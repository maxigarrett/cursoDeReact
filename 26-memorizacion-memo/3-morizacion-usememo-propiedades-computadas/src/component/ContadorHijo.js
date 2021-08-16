import { memo, useMemo } from "react"
//asi como USECALLBACK memoriza una funcion. USEMEMO sirve para memorizar el resultado de una funcion 
// osea lo que retorna es decir un valor calculado


// se puede usar memo de esta manera
export const ContadorHijo=memo(({contador,aumentarContador,decrementarContador})=>{    

    //------------------------------importante-----------------------------------
    //USEMEMO pide variable de dependencia pero en este caso no es necesario ya que no es una variable
    //de estado asique va un array vacio pero tenemos que retornar la variable a memorizar.
    //ahora cuando cargue por primera ves tardara en terminar el proceso del ciclo FOR. pero despues
    //al usar useMemo() ya memorizo esa varible por lo cual si no sufre cambion no se re-renderizara
    //causando que la aplicacion sea lenta
    const Supernumero= useMemo(()=>{
        // haremos pesado un ciclo for para que simule una peticion que tarde mucho por traer 
        //muchisimos datos
        let numero=0;
        for(let i=0;i<1000000000;i++){
            numero++
        }
        return numero
    },[])
    console.log('Renderizado')
    return(
        <div style={{border:'1px solid #000',margin:'1rem',padding:'1rem',textAlign:'center'}}>
            <h2>Hijo contador</h2>
            <button onClick={aumentarContador}>Aumentar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <h4>{contador}</h4>
            <h4>{Supernumero}</h4>
        </div>
    )
})
// --------------------------------IMPORTANTE------------------------------------------
