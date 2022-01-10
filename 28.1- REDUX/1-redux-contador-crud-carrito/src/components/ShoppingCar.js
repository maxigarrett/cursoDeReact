import { useDispatch, useSelector } from "react-redux"
import { addToCar, clearCar, deleteCar } from "../actions/shoppengCardAction"
import { ShoppingCarItem } from "./ShoppingCarItem"
import { ShoppingProducts } from "./ShoppingProducts"

export const ShoppingCar=()=>{
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    console.log(state)
    const {products,car}= state.shoping;


    return (
        <>
            <h1>Carrito De compras useReducer</h1>
            <section className='box'>
                {products && products.map((product)=>
                    <ShoppingProducts key={product.id} data={product} addToCar={()=>dispatch(addToCar(product.id))}/>)}
            </section>

            <section>
                <button style={{width:'100px'}} onClick={()=> dispatch(clearCar())}>Clear Car</button>
                {car.map((item,index)=>
                    <ShoppingCarItem 
                        key={index} 
                        data={item} 
                        delOneFromCar={()=> dispatch(deleteCar(item.id))}
                        delAllFromCar={()=> dispatch(deleteCar(item.id,true))}
                    />)}
            </section>
        </>
    )
}