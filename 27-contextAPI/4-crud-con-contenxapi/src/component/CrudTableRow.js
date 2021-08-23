import React, { useContext } from 'react';
import { CrudContext } from '../context/CrudContext';

export const CrudTableRow=({dataCaballeros})=>{
    const{setdataToEdit,deleteData}=useContext(CrudContext)
    const {name,constellation,id}=dataCaballeros;
    return(
        // no creamos <></> ya que va dentro de un <tr> y causa conflicto
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                {/*estas informaciones se van a propagar hasta el padre que es donde estan las funciones y variables de estado*/}
                <button onClick={()=>setdataToEdit(dataCaballeros)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr> 
        
    )
}
