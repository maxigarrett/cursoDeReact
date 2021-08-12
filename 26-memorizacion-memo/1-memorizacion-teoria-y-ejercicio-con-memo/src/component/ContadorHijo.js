import { memo } from "react"

// se puede usar memo de esta manera
export const ContadorHijo=memo(()=>{    
    console.log('Renderizado')
    return(
        <div style={{border:'1px solid #000',margin:'1rem',padding:'1rem',textAlign:'center'}}>
            <h2>Hijo contador</h2>
        </div>
    )
})
// --------------------------------IMPORTANTE------------------------------------------
//si lo exportamos de manera normal cada ves que aumentemos el contador este componente hijo tambien 
// se renderizara aunque no hagamos cambios en el
//export default ContadorHijo

/*se puede usar memo de esta manera:
 memo memoriza este componente para que cuando se actualice el padre, este que es el hijo no se 
actualice si no hace falta. por eso lo memoriza y ve si se hizo cambio en caso de que no pues 
lo deja como esta sin renderizar de nuevo.*/

// export default memo(ContadorHijo)