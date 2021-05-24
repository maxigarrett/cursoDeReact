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
    const handleChage=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        //esto hace referencia a la variable de estado por lo tanto no hace falta el value o el e.target
        if(!form.name || !form.constellation){
            alert('datos incompletos')
            return
        }
        
        //si el id es null entonces invocamos al funcion de crear nuevo registro con las props y le pasamos por parametro
        //el valor de los input que luego lo trabajmos en las funciones que aca le passamos como props aca pero estan en 
        //el componente padre llamado CrudForm
        if(form.id===null){
            createData(form)

        }
        else{
            updateData(form)
        }

        handleReset();
    }
    const handleReset=()=>{
        //para limpiar los input no hay que olvidar que estan controlados por una variable de estado entonces llamamos a 
        //este estado y le pasamos el obj con sus propiedades vacias.
        setForm(initialForm);
        setDataToEdit(null)
    }
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