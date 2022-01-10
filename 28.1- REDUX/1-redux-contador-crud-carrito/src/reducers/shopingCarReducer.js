import { ADD_CAR, CLEAR_CAR, REMOVE_ALL_PRODUCTS_CAR, REMOVE_ONE_PRODUCT_CAR } from "../types";
const intialShoppingCard={
    products:[//simulamos que traemos los productos de una BBDD
        {id:1,name:'producto 1',price:100},
        {id:2,name:'producto 2',price:200},
        {id:3,name:'producto 3',price:300},
        {id:4,name:'producto 4',price:400},
        {id:5,name:'producto 5',price:500},
        {id:6,name:'producto 6',price:600},
        {id:7,name:'producto 7',price:700},
        {id:8,name:'producto 8',price:800}
    ],
    car:[]//donde se almacenara lo que seleccione el usuario
}
export const shopingCarReducer=(state=intialShoppingCard,action)=>{

    switch (action.type) {
        case ADD_CAR:
            let newItem=state.products.find(product=>product.id===action.payload);
            let itemInCarRepeat=state.car.find(item=>item.id=== newItem.id)

            return itemInCarRepeat?
                {...state,
                    //recorreremos el array de car
                    car:state.car.map(el=>
                        el.id===itemInCarRepeat.id ?{...el,cuantity:el.cuantity +1}:el
                        )
                }
                :
                {
                    ...state,
                    car:[...state.car,{...newItem,cuantity:1}]
                }
            
        case REMOVE_ONE_PRODUCT_CAR :
            let itemToDelete=state.car.find(item=>item.id===action.payload)
            return itemToDelete.cuantity > 1?{
                ...state,
                car:state.car.map(item=>item.id===action.payload?{...item,cuantity:item.cuantity-1}:item)
            }:{
                //si llega a 1 producto y le damos a eliminar entonces eliminamos todo
                ...state,
                car:state.car.filter(item=>item.id!==action.payload)
            }
        case REMOVE_ALL_PRODUCTS_CAR:
            return{
                ...state,
                car:state.car.filter(item=>item.id!==action.payload)
            }
        case CLEAR_CAR: 
            return intialShoppingCard
        default: return state;
    }
}