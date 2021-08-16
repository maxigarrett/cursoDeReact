import { memo } from "react"

// se puede usar memo de esta manera
export const ContadorHijo=memo(({contador,aumentarContador,decrementarContador})=>{    
    console.log('Renderizado')
    return(
        <div style={{border:'1px solid #000',margin:'1rem',padding:'1rem',textAlign:'center'}}>
            <h2>Hijo contador</h2>
            <button onClick={aumentarContador}>Aumentar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <h4>{contador}</h4>
        </div>
    )
})
// --------------------------------IMPORTANTE------------------------------------------
// ahora si se renderizara ya que el hijo esta actualizando la variable contador cada vez que el padre
//actualice con los botones para incrementar o decrementar contador