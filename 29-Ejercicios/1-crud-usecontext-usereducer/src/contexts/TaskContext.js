import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
const initialTask={
    tasks:[
        {id:1,title:'task 1',description:'description 1',},
        {id:2,title:'task 2',description:'description 2',}
    ]
}
export const TaskContext=createContext(initialTask)


export const TaskProvaider=({children})=>{
    
    const [state,dispatch]=useReducer(taskReducer,initialTask)
    
    const addTask=(task)=>{
        dispatch({type:'ADD_TASK',payload:task})

    }

    //como en el provider hay que pasarle un obj pero pasamos un obj y una funcion usamos el ...state
    //para incluir todo en un solo obj osea el valor actual de state mas la funcion addTask
    const data={...state,addTask}
    return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>
}
