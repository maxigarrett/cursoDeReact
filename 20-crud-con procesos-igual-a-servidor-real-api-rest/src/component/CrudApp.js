import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';

export const CrudApp=()=>{
   const [db,setdb]= useState([]);
   const [dataToEdit,setdataToEdit]= useState(null);//para saber si necesitamos crear o actulizar datos

   const CreateData=(data)=>{
    data.id=Date.now();
    setdb([...db,data])
   }

   const UpdateData=(data)=>{
        // console.log(data.id)
        let newData=db.map((el)=>el.id===data.id ? data : el)
        setdb(newData)
        console.log(newData)
   }
   const DeleteData=(id)=>{
        console.log(id)
        let confirmDelete=window.confirm(`estas seguro que desea eliminar el registro con id ${id}`)
       
            if(!confirmDelete){
                return
            }else{
                let newDataDelete=db.filter(el=>el.id!==id)
                setdb(newDataDelete)
                console.log(newDataDelete)
            }   
   }
    return(
        <>
            <header> 
                <h2>Crud App</h2> 
            </header>
            <main>
                {/*le pasamos la funcion como props la funcion seria la que esta dentro de llaves*/}
                <CrudForm 
                    createData={CreateData}
                    updateData={UpdateData} 
                    dataToEdit={dataToEdit}
                    setDataToEdit={setdataToEdit}
                />
                {/*pasamos la info de la bbdd simulada comop prop*/}
                <CrudTable 
                    data={db} 
                    setDataToEdit={setdataToEdit}
                    deleteData={DeleteData}
                />
            </main>
        </>
    )
}