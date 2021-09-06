
import { useReducer } from "react"
import { TYPES } from "../action/carShoppingAction"
import { intialShoppingCard,shoppingCardreducer} from "../reducers/shopingCarReducer"
import { ShoppingCarItem } from "./ShoppingCarItem"
import { ShoppingProducts } from "./ShoppingProducts"
export const ShoppingCar=()=>{
    const[state,dispach]=useReducer(shoppingCardreducer,intialShoppingCard)
    const{products,car}=state;
    //  console.log(products,car)
    
    const addToCar=(id)=>{
        // console.log(id)
        dispach({type:TYPES.ADD_TO_CAR,payload:id})
    }

    const deleteCar=(id,value=false)=>{
        if(value){
            dispach({type:TYPES.REMOVE_ALL_FROM_CAR,payload:id})
        }else{
            dispach({type:TYPES.REMOVE_ONE_FROM_CAR,payload:id})
        }
    }
    const clearCar=()=>{}
    return (
        <>
            <h1>Carrito De compras useReducer</h1>
            <section className='box'>
                {products && products.map((product)=>
                    <ShoppingProducts key={product.id} data={product} addToCar={addToCar}/>)}
            </section>

            <section>
                <button style={{width:'100px'}} onClick={clearCar}>Clear Car</button>
                {car.map((item,index)=><ShoppingCarItem key={index} data={item} deleteCar={deleteCar}/>)}
            </section>
        </>
    )
}