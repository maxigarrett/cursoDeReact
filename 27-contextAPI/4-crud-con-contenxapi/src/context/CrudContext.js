import { createContext, useEffect, useState } from "react";
import { HelpHttp } from "../helper/HelpHttp";

export const CrudContext= createContext()

export const CrudProvider=({children})=>{
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
     const createData=async(data)=>{
         data.id=Date.now();
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
 
 
    const updateData=(data)=>{
         // console.log(data.id)
         let rutUrl=`${url}/${data.id}`;
         console.log(rutUrl)
         let option={
             body:data,
             headers:{'content-type':'application/json'}
         }
         put(rutUrl,option).then(res=>{
             // console.log(res);    
             //si va todo bien es que ya modifico la bbdd solo queda traer esos datos de la bbdd
             if(!res.err){
                 //traemos la nueva bbdd moodificada por el put
                 //cada vuelta de bucle si el id coincide me tres ese registro sino me trae la bbdd normal
                 //hasta encontrar esa coinidencia. pero de todas manera traera toda la bbdd
                 let newData=db.map((el)=>el.id===data.id ? data : el)
                 console.log(newData)
                 setdb(newData)
                 
             }else{
                 setError(res)
             }
         })
    }
    const deleteData=(id)=>{
         console.log(id)
         let confirmDelete=window.confirm(`estas seguro que desea eliminar el registro con id ${id}`)
        
             if(!confirmDelete){
                 return
             }else{
 
                 let rutUrl=`${url}/${id}`;
                 let options={
                     headers:{'content-type':'application/json'}
                 }
                 delet(rutUrl,options).then(res=>{
                     if(!res.err){
                         let newDataDelete=db.filter(el=>el.id!==id)
                         setdb(newDataDelete)
                         console.log(newDataDelete)
                     }else{
                         setError(res)
                     }
                 })
             }   
    }

    const data={
        db,dataToEdit,error,loading,createData,updateData,deleteData,setdataToEdit
    }
    return(
        <CrudContext.Provider value={data} >{children}</CrudContext.Provider>
    )
}