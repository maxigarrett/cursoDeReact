import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

export const initialState=0
export const contadorReducers=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return state +1;
        case DECREMENT:
            return state -1;
        case DECREMENT_5:
            return state - action.payload;
        case INCREMENT_5:
            return state + action.payload;
        case RESET:
            return initialState
        default: return state;
    }
}