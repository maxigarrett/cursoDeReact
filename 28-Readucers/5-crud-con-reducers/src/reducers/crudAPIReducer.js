import React from 'react';
import {TYPES} from '../action/crudAction';

export const  CrudInitialDb={
    db:null
}
export const crudAPIReducer = (state,action) => {
    // const {type}=action
    switch (action.type) {
        case TYPES.READ_ALL_DATA:{
            return{
                ...state,
                db:action.payload.map(el=>el)
            }
        }
         
        case TYPES.CREATE_DATA:{
            return{
                ...state,
                db:[...state.db,action.payload]
            }
        }
          
        case TYPES.UPDATE_DATA:{
            console.log(action.payload)
            //me traera los registros normales mientra el id sea distinto hasta que coincida y traera el del 
            //formulario que se almacena en el action.payload 
            let newData=state.db.map((el)=>el.id===action.payload.id ? action.payload : el)
            return{
                ...state,
                db:newData
            }
        }
            
        case TYPES.DELETE_DATA:{
            let newDataDelete=state.db.filter(el=>el.id!==action.payload)
            return{
                ...state,
                db:newDataDelete
            }
        }
            
        case TYPES.NO_DATA:{
            return CrudInitialDb
        }
        default:{
            return state
        }
    }
}
