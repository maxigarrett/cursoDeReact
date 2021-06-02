import React, { useEffect, useState } from 'react';
import { HelpHttp } from '../helper/HelpHttp';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import { Loader } from './Loader';
import { Message } from './Message';
// json-server --watch db.json
export const CrudApp=()=>{
   const [db,setdb]= useState(null);
   const [dataToEdit,setdataToEdit]= useState(null);//para saber si necesitamos crear o actulizar datos
   const [error,setError]= useState(null);
   const [loading,setLoading]= useState(false);

   let {get,post,put,delet}=HelpHttp();
   let url='http://localhost:5000/santos';

   useEffect(()=>{
       setLoading(true)//antes de cargar datos la pasamos a true para que muestre el componente Loader.js
    get(url).then(data=>{
        console.log(data);
        if(!data.err){
            setdb(data)
            setError(null)
        }else{
            // console.log(data);
            setdb(null)
            setError(data)
        }
        setLoading(false)
    })
   },[url])
    const CreateData=async(data)=>{
        data.id=Date.now();
       //podriamos ponerlo por defecto el el helper pero no todas las apis andan cuando le pasas
       //esta cabezera
       let options={
            body:data,
            headers:{'content-type':'application/json'}
        }
        await post(url,options).then((res)=>{
           console.log(res)
           if(!res.err){//si no hay una propiedad err que creamos en el helper pues todo va bien
            setdb([...db,res])
           }
           else{
               setError(res)
           }
       })
    }


   const UpdateData=(data)=>{
        // console.log(data.id)
        let rutUrl=`${url}/${data.id}`;
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
                {/*&& muestra lo que es false y como la varibale esta en false se queda ahi y no
                hace nada cuando pase a true mostrara el loader ya que el && muestra lo contrario
                de true y si loading es true mostrara lo contrario osea loader*/}
                {loading && <Loader />}
                {error && <Message MesaggeError={`Error ${error.status} ${error.statusText}`} BgColor='#dc3545'/>}

                {/*como la db ya existe entonces no es null o false mostrara lo contrario osea
                la crudtable*/}
                {db &&                 
                    <CrudTable 
                        data={db} 
                        setDataToEdit={setdataToEdit}
                        deleteData={DeleteData}
                    />
                }

                
                
            </main>
        </>
    )
}