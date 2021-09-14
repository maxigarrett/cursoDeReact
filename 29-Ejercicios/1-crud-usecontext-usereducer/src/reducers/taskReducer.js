export const taskReducer=(state,action)=>{
    // console.log(state,action)
    switch(action.type){
        case 'ADD_TASK':
            // console.log([state.tasks])
            return {
                tasks:[...state.tasks,action.payload]
            }

        case 'DELETE_ALL_TASK':
            return{tasks:[]}

            

        case 'DELETE_TASK':
            // console.log(action.payload)
            const TaskDelete=state.tasks.filter(task=>task.id!==action.payload)
            return {
                tasks:TaskDelete
            }


        case 'UPDATE_TASK':
            // console.log(action.payload.description)
            state.tasks.map(task=>{
                //si la tarea que ya tiene un id coincide con lo que trae el payload
                //remplazaremos el valor original por uno nuevo en la tarea que coincide con el id
                if(task.id===action.payload.id){
                    // console.log(task)
                    task.title=action.payload.title
                    task.description=action.payload.description
                    return{
                       tasks: [...state.tasks]
                    } 
                }
            })
            return {
                tasks:[...state.tasks]
            }
        case 'TOGGLE_TASK_FINISHED':
            // forma mas cecilla y que anda que cambie si es false o true el mensaje de la tarea
            return{
                tasks: state.tasks.map(task=>task.id==action.payload?{...task,finished:!task.finished}:task)
            }
        /*DE esta froma no anda y es lo mismo solo cambia a true una ves y no anda mas
            let toggleteTask=state.tasks.map(task=>{
                if(task.id===action.payload){
                    task.finished= !task.finished
                    //muestra el objeto que coincide con el id del boton de terminar la tarea o sin terminar.
                    // console.log(task)
                    return{
                        tasks:{...task,finished:task.finished}
                    }
                }
            })
        
           toggleteTask= state.tasks.map(el=>el)
            return {
                tasks: toggleteTask
            }*/
            
        default: return state
    }
}