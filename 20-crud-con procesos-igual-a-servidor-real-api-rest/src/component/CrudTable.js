import { React } from "react";
import { CrudTableRow } from "./CrudTableRow";
import './CrudTable.css'

export const CrudTable=({data,setDataToEdit,deleteData})=>{
    return(
        <>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contellations</th>
                        <th className='accionesth'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/*si paramos el json server teniamos data.length===0. pero da error y se cae la app
                    porque la variable la bbdd simulada esta inicializada en nulo. entonces cambiamos
                    la condicion diciendo que si la data es mayor a 0 que imprima los datos sino
                    una tabla vacia */}
                    {data.length >0?
                        data.map((el)=>
                            <CrudTableRow 
                                key={el.id} 
                                dataCaballeros={el} 
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData}
                            />
                        )
                        :
                        <tr>
                            <td colSpan='3'>Sin Datos</td>
                        </tr>
  
                    }
                    
                </tbody>
            </table>
        </>
    )
}