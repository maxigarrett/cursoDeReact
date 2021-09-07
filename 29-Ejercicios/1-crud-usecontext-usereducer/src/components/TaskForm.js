import {React, useState,useContext} from 'react';
import { TaskContext } from '../contexts/TaskContext';


const initialForm={
    title:'',
    description:''
}
export const TaskForm=()=>{
    const [form,setForm]=useState(initialForm)
    const {addTask} =useContext(TaskContext)
    const handelChange=(e)=>{
        let {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        }) 
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        addTask(form)
    }
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
                    />
                </div>
                <div className='mb-5'>
                    <textarea  
                        name='description' 
                        placeholder='descripcion'
                        rows='2'
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        onChange={handelChange}
                    />
                </div>
                <button 
                    type='submit'
                    className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5'>
                        Create Task
                </button>
            </form>
        </div>
    )
}