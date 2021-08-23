import React, { useContext } from 'react';
import { CrudContext } from '../context/CrudContext';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import { Loader } from './Loader';
import { Message } from './Message';
// json-server --watch db.json para arrancar un servidor y se fije la bbdd que creamos llamada db.json
export const CrudApp=()=>{
    const{db,loading,error}=useContext(CrudContext)
    return(
        // no se puede usar CrudProvaider y usecontext en el mismo archivo. Lo usaremos al provider envolviendo
        //todo este componente en App.js y usamos useCOntext para extraer las variables que necesitamos aca 
        // <CrudProvider>  
            <>
                <header> 
                    <h2>Crud App Con ContextApi</h2> 
                </header>
                <main>
                    {/*le pasamos la funcion como props la funcion seria la que esta dentro de llaves*/}
                    <CrudForm/>
                    {loading && <Loader />}
                    {error && <Message MesaggeError={`Error ${error.status} ${error.statusText}`} BgColor='#dc3545'/>}
                    {db && <CrudTable/>}   
                </main>
            </>
        // </CrudProvider>
    )
}