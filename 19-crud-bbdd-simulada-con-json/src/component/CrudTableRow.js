import React from 'react';

export const CrudTableRow=({dataCaballeros})=>{

    return(
        // no creamos <></> ya que va dentro de un <tr> y causa conflicto
        <tr>
            <td>{dataCaballeros.name}</td>
            <td>{dataCaballeros.constellation}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr> 
        
    )
}
