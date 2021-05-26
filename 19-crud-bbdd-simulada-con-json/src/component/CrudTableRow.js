import React from 'react';

export const CrudTableRow=({dataCaballeros,setDataToEdit,deleteData})=>{
    const {name,constellation,id}=dataCaballeros;
    return(
        // no creamos <></> ya que va dentro de un <tr> y causa conflicto
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                {/*estas informaciones se van a propagar hasta el padre que es donde estan las funciones y variables de estado*/}
                <button onClick={()=>setDataToEdit(dataCaballeros)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr> 
        
    )
}
