import {React, useState,useContext, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import { TaskContext } from '../contexts/TaskContext';

const initialForm={
    id:'',
    title:'',
    description:''
}
export const TaskForm=()=>{
    const [form,setForm]=useState(initialForm)
    const {addTask,tasks,updateTask} =useContext(TaskContext)
    const location=useHistory();
    const params=useParams();
    // console.log(params.id)

    //actualizamos la variable de estado form
    const handelChange=(e)=>{
        let {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        }) 
    }

    //enviamos el formlario
    const handelSubmit=(e)=>{
        e.preventDefault();
        //si trae un id la url editamos sino creamos la tarea
        if(params.id){
            console.log('update')
            updateTask(form)
        }else{
            console.log('creating')
            addTask(form)
        }
        location.push('/')
    }

    
    useEffect(()=>{
        if(!params.id) return null
        const findTask=tasks.find(task=>task.id==params.id)
 
        //si existe un id en el la url como parametro de la ruta llenamos formulario
        if(findTask)setForm(findTask)
    
    },[params.id,tasks])
    return(
        <div className='flex justify-center items-center h-3/4'>
            <form className='bg-gray-900 p-10' onSubmit={handelSubmit}>
                <h2 className='mb-7 text-3xl'>Task</h2>
                <div className='mb-5'>
                    <input 
                        type='text' 
                        name='title' 
                        placeholder='titulo de la tarea'
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        onChange={handelChange}
                        value={form.title}
                    />
                </div>
                <div className='mb-5'>
                    <textarea  
                        name='description' 
                        placeholder='descripcion'
                        rows='2'
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        onChange={handelChange}
                        value={form.description}
                    />
                </div>
                <button 
                    type='submit'
                    className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5'>
                      {params.id?'Edit Task':' Create Task'} 
                </button>
            </form>
        </div>
    )
}