import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
const inicialDb=[
    {
        id:1,
        name:'seya',
        constellation:'Pegaso'
    },
    {
        id:2,
        name:'Shiru',
        constellation:'Dragon'
    },
    {
        id:3,
        name:'Hyoga',
        constellation:'Cisne'
    },
    {
        id:4,
        name:'Shun',
        constellation:'Andromeda'
    },
    {
        id:5,
        name:'Ikki',
        constellation:'Fenix'
    }
]
export const CrudApp=()=>{
   const [db,setdb]= useState(inicialDb);
   const [dataToEdit,setdataToEdit]= useState(null);//para saber si necesitamos crear o actulizar datos

   const CreateData=(data)=>{

   }
   const UpdateData=(data)=>{

   }
   const DeleteData=(id)=>{

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