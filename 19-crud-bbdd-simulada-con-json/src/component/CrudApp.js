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
    // console.log(data,data.name,data.id)
    //agregamos un id para cuando creamos un nuevo registro y si despues comprobamos va a tener un id y por lo tanto vamos
    //a poder actualizar esto solo se aplica a los nuevos registros y los que ya existen tienen un id.
    data.id=Date.now();
    setdb([...db,data])
   }

   //una ves el formulario este lleno cuanod le pasamos la info con un id se ejecutara esta funcion y si modificamos
   //ese form y el id que trae del objeto por parametro data es igual al que estamos array con la info que estamos recorriendo
   //entonces en llenamos un variable con la data modificada del formulario y actualizamos la variable de estado
   const UpdateData=(data)=>{
        // console.log(data.id)
        let newData=db.map((el)=>el.id===data.id ? data : el)
        setdb(newData)
        console.log(newData)
   }
   const DeleteData=(id)=>{
        console.log(id)
        //el confirm es como un alert pero no anda sin poner window ya que si no lo toma como una funcion que no se declara en 
        //ningun lado devuelve un boolean
        let confirmDelete=window.confirm(`estas seguro que desea eliminar el registro con id ${id}`)
       
            if(!confirmDelete){
                return
            }else{
                //  crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
                //osea traera todo los registros y los metera en newDataDelete menos el de el id que seleccionamos con el boton
                //eliminar
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