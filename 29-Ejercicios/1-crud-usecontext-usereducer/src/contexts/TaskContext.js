import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import {v4} from 'uuid';//npm install uuid para crear id unicos
const initialTask={
    tasks:[
        {id:1,finished:false,title:'task 1',description:'description 1',},
        {id:2,finished:false,title:'task 2',description:'description 2',}
    ]
}
export const TaskContext=createContext(initialTask)


export const TaskProvaider=({children})=>{
    
    const [state,dispatch]=useReducer(taskReducer,initialTask)
    
    const addTask=(form)=>dispatch({type:'ADD_TASK',payload:{...form,id:v4()}})
    const deleteAllTask=()=>dispatch({type:'DELETE_ALL_TASK'})
    const deleteTask=(id)=>dispatch({type:'DELETE_TASK',payload:id})
    const updateTask=(form)=>dispatch({type:'UPDATE_TASK',payload:form})
    const toggleTask=(id)=>dispatch({type:'TOGGLE_TASK_FINISHED',payload:id})
    
    //como en el provider hay que pasarle un obj pero pasamos un obj y una funcion usamos el ...state
    //para incluir todo en un solo obj osea el valor actual de state mas la funcion addTask
    const data={...state,addTask,deleteAllTask,deleteTask,updateTask,toggleTask}
    return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>
}
