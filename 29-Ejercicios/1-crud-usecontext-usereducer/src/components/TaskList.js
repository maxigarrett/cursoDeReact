import {React , useContext} from "react";
import { TaskContext } from "../contexts/TaskContext";
export const TaskList=()=>{
    const {tasks}=useContext(TaskContext)
    // console.log(tasks)

    return(
        <div className='flex justify-center'>
            <div className='w-6/12'>
                {tasks.map(task=>(
                    <div key={task.id} className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between'>
                        <div>
                            <h2>{task.title}</h2>
                            <h2>{task.description}</h2>
                        </div>
                        <div>
                            <button>delete</button>
                            <button>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}