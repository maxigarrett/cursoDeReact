import React, { useState } from 'react';

//parar que no tire warning por consola porque en los value no tiene nada al inicio entonces
//creamos un obj para dar un falso inicio a los values de los input (BUENA PRACTICA)
const initialForm={
    name:'',
    constellation:'',
    id:null,
}
export const CrudForm=({createData,updateData,dataToEdit,setDataToEdit})=>{
    //en ves de que cargue un obj vacio le decimos que cargue el obj que creamos
    const [form,setForm]=useState(initialForm)
    const handleChage=()=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleReset=()=>{}
    return(
        <>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    onChange={handleChage}
                    value={form.name}
                />
                <input 
                    type='text' 
                    name='constellation' 
                    placeholder='Contellations'
                    onChange={handleChage}
                    value={form.contellation}
                />
                <input type='submit'value='Enviar'/>
                <input type='reset' onClick={handleReset}/>
            </form>
        </>
    )
}