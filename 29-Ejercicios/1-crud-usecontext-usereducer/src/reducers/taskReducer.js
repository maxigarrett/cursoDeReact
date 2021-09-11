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
            const updateTask=state.tasks.map(task=>{
                //si la tarea que ya tiene un id coincide con lo que trae el payload
                //remplazaremos el valor original por uno nuevo en la tarea que coincide con el id
                if(task.id==action.payload.id){
                    // console.log(task)
                    task.title=action.payload.title
                    task.description=action.payload.description
                    return{
                       tasks: [...state.tasks]
                    } 
                }
            })
            
        default: return state
    }
}