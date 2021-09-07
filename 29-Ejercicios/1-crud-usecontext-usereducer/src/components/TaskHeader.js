import {React} from 'react';
import { Link } from "react-router-dom"
import {IoMdAdd} from 'react-icons/io';
export const TaskHeader=()=>{
    return(
        <>
            <div className='flex item-center mb-10'>
                <Link to='/'>
                    <h2 className='text-gray-100 text-2x1'>Task app</h2>
                </Link>
                <div className='flex-grow text-right px-4 py-2 m-2'>
                    <Link to='/add'>
                    <button className='bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4
                        rounded inline-flex items-center'>
                        <IoMdAdd/>
                        Add Task
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}