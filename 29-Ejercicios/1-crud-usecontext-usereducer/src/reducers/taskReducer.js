export const taskReducer=(state,action)=>{
    // console.log(state,action)
    switch(action.type){
        case 'ADD_TASK':
            // console.log([state.tasks])
            return {
                tasks:[...state.tasks,action.payload]
            }
        default: return state
    }
}