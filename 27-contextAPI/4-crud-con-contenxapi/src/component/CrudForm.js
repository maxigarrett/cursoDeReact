import React, { useContext, useEffect, useState } from 'react';
import { CrudContext } from '../context/CrudContext';
import './CrudForm.css'

const initialForm={
    name:'',
    constellation:'',
    id:null,
}
export const CrudForm=()=>{
    //destructuramos el contexto que recibe de CrudContext.js
    const {createData,updateData,dataToEdit,setdataToEdit}=useContext(CrudContext);
    //en ves de que cargue un obj vacio le decimos que cargue el obj que creamos
    const [form,setForm]=useState(initialForm)

    useEffect(()=>{
        if(dataToEdit!==null){
            setForm(dataToEdit)
        }
        else{
            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChage=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name || !form.constellation){
            alert('datos incompletos')
            return
        }
        
        if(form.id===null){
            createData(form)
        }
        else{
            updateData(form)
        }

        handleReset();
    }
    const handleReset=()=>{
        setForm(initialForm);
        setdataToEdit(null)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            {dataToEdit!==null?<h3>editando</h3>:<h3>agregando</h3>}
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    onChange={handleChage}
                    value={form.name}//si apretamos en el boton editar rellenara estos input ya que se modifica la variable form
                />
                <input 
                    type='text' 
                    name='constellation' 
                    placeholder='Contellations'
                    onChange={handleChage}
                    value={form.constellation}
                />
                <input className='botones' type='reset' onClick={handleReset}/>
                <input className='botones' type='submit'value='Enviar'/>
            </form>
        </>
    )
}