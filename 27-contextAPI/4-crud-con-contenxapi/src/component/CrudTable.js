import { React, useContext } from "react";
import { CrudTableRow } from "./CrudTableRow";
import './CrudTable.css'
import { CrudContext } from "../context/CrudContext";

export const CrudTable=()=>{
    //no destructuramos setdataToEdit,deleteData porque en realidad lo usa <CrudTableRow>
    const {db: data}=useContext(CrudContext)
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
                    {data.length >0?
                        data.map((el)=>
                            <CrudTableRow 
                                key={el.id} 
                                dataCaballeros={el} 
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