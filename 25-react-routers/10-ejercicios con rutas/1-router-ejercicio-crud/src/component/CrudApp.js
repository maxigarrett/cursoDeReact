import React, { useEffect, useState } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { HelpHttp } from '../helper/HelpHttp';
import { Error404 } from '../pages/Error404';
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
        console.log(rutUrl)
        let option={
            body:data,
            headers:{'content-type':'application/json'}
        }
        put(rutUrl,option).then(res=>{
            // console.log(res);    
            if(!res.err){
                let newData=db.map((el)=>el.id===data.id ? data : el)
                console.log(newData)
                setdb(newData)
                
            }else{
                setError(res)
            }
        })
   }
   const DeleteData=(id)=>{
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
    return(
        <>
        {/*basename sirve para indicar la ruta que van a compartir todas las rutas*/}
        <HashRouter basename='santos'>
            <header> 
                <h2>Crud App Con Rutas</h2> 
            </header>
            <nav>{/*tendria qu ir en un archivo aparte y llamarlo aca*/}
                {/*al tener ese basename y poner to='/' en la url aparecera como to='/santos'*/}
                <NavLink exact to='/' activeClassName='active'>Santos</NavLink>
                <NavLink exact to='/agregar' activeClassName='active'>Agregar</NavLink>
            </nav>
            <Switch>
                <Route exact path='/'>
                    <main>
                        {loading && <Loader />}
                        {error && <Message MesaggeError={`Error ${error.status} ${error.statusText}`} BgColor='#dc3545'/>}

                        {db &&                 
                            <CrudTable 
                                data={db} 
                                setDataToEdit={setdataToEdit}
                                deleteData={DeleteData}
                            />
                        }     
                    </main>
                </Route>
                <Route exact path='/agregar'>
                    <CrudForm 
                        createData={CreateData}
                        updateData={UpdateData} 
                        dataToEdit={dataToEdit}
                        setDataToEdit={setdataToEdit}
                    />
                </Route>
                <Route exact path='/editar/:id'>
                    <CrudForm 
                        createData={CreateData}
                        updateData={UpdateData} 
                        dataToEdit={dataToEdit}
                        setDataToEdit={setdataToEdit}
                    />
                </Route>
                <Route to='*' children={<Error404/>}></Route>
            </Switch>
        </HashRouter>
        </>
    )
}