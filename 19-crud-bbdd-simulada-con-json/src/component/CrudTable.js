import { React } from "react";
import { CrudTableRow } from "./CrudTableRow";
import './CrudTable.css'

export const CrudTable=({data,setDataToEdit,deleteData})=>{
    return(
        <>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contellations</th>
                        <th className='accionesth'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length===0?
                        <tr>
                            <td colSpan='3'>Sin Datos</td>
                        </tr>
                        :
                        data.map((el)=>
                            <CrudTableRow 
                                key={el.id} 
                                dataCaballeros={el} 
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData}
                            />
                        )
                    }
                    
                </tbody>
            </table>
        </>
    )
}