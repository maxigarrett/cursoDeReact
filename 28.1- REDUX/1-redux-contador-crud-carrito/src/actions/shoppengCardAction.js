import { ADD_CAR, CLEAR_CAR, REMOVE_ALL_PRODUCTS_CAR, REMOVE_ONE_PRODUCT_CAR } from "../types";

export const addToCar=(id)=>({type:ADD_CAR,payload:id})
export const deleteCar=(id,value=false)=>{
    if(!value){
        return {type:REMOVE_ONE_PRODUCT_CAR,payload:id}
    }else{
        return {type:REMOVE_ALL_PRODUCTS_CAR,payload:id}
    }
}
export const clearCar=()=>({type:CLEAR_CAR})


