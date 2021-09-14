import {React , useContext} from "react";
import { Link } from "react-router-dom"
import { TaskContext } from "../contexts/TaskContext";
export const TaskList=()=>{
    const {tasks,deleteAllTask,deleteTask,toggleTask}=useContext(TaskContext)
    //  console.log(tasks)


    return(
        <div className='flex justify-center'>
            <div className='w-6/12'>
            <button onClick={deleteAllTask}>delete All task</button>

                {tasks.map(task=>(
                    <div key={task.id} className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between'>
                        <div>
                            <h2>{task.title}</h2>
                            <h2>{task.description}</h2>
                            <h2>{task.id}</h2>
                            <h2>{`${task.finished}`}</h2>
                            <button onClick={()=>toggleTask(task.id)}>{!task.finished?'sin terminar':'terminado'}</button>
                        </div>
                        <div>
                            <button onClick={()=>deleteTask(task.id )}>delete</button>
                            <Link to={`/edit/${task.id}`}>Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}