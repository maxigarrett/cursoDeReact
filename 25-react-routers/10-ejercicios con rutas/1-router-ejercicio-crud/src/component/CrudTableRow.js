import React from 'react';
import { useHistory } from 'react-router-dom';

export const CrudTableRow=({dataCaballeros,setDataToEdit,deleteData})=>{
    const {name,constellation,id}=dataCaballeros;
    let history=useHistory();
    const handleEdit=()=>{
        setDataToEdit(dataCaballeros)
        history.push(`/editar/${id}`)
    }
    return(
        // no creamos <></> ya que va dentro de un <tr> y causa conflicto
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                {/*estas informaciones se van a propagar hasta el padre que es donde estan las funciones y variables de estado*/}
                <button onClick={handleEdit}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr> 
        
    )
}
