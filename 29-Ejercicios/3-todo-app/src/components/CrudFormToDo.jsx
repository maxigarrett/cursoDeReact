import React, { useState } from 'react'
import './CrudFormToDo.css'
export const CrudFormToDo = ({createTask}) => {
    const initialForm={task:''}
    const [form, setForm] = useState(initialForm);
    //como necesitamos un id lo aremos en el timepo actual en milinsegundos

    const handelChange=(e)=>{
        let {value,name}=e.target
        setForm({...form,[name]:value})
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        if(form.task.trim()==='') {
            alert('escribe una tarea por favor')
            setForm(initialForm)
        }
        createTask(form)
    }
  return (
    <div className='form'>
        <form onSubmit={handelSubmit}>
            <input 
            type="text"
            name='task' 
            value={form.task}
            onChange={handelChange}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}
