import { TYPES } from "../action/carShoppingAction";
export const intialShoppingCard={
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

// FUNCION REDUCTORA
export const shoppingCardreducer=(state,action)=>{
    switch(action.type){
        case TYPES.ADD_TO_CAR:{
            // console.log(state)
            //obtenemos caundo hace clic en el boton add el producto que coincida con el id
            //para poder agregarlo al array de carrrito y pintarlo
            let newItem=state.products.find(product=>product.id===action.payload);

            //si se repite el id. la primera ves no porque cuando lea el codigo todavia no se agrega
            //al carro por lo tento no lo encuentra si agregamo el mismo producto si encontrara el mismo id
            let itemInCarRepeat=state.car.find(item=>item.id=== newItem.id)
            
            
            //en caso de que si hagamos clic en el mismo producto
            return itemInCarRepeat?
                {...state,
                    //recorreremos el array de car
                    car:state.car.map(el=>
                        el.id===itemInCarRepeat.id ?{...el,cuantity:el.cuantity +1}:el
                        )
                }
                :
                //si no hace clic en dos veces el mismo producto pues la cantidad o quantity sera 1
                //es decir que es el primer producto que agrega o todos los que esta agregando no se
                //repiten
                {
                    ...state,
                    car:[...state.car,{...newItem,cuantity:1}]
                }
            
        }


        case TYPES.REMOVE_ONE_FROM_CAR:{
            let itemToDelete=state.car.find(item=>item.id==action.payload)
            return itemToDelete.cuantity > 1?{
                ...state,
                car:state.car.map(item=>item.id==action.payload?{...item,cuantity:item.cuantity-1}:item)
            }:{
                //si llega a 1 producto y le damos a eliminar entonces eliminamos todo
                ...state,
                car:state.car.filter(item=>item.id!==action.payload)
            }

        }
        case TYPES.REMOVE_ALL_FROM_CAR:{
            return{
                ...state,
                car:state.car.filter(item=>item.id!==action.payload)
            }
        }
        case TYPES.CLEAR_CAR:{
            return intialShoppingCard
        }
        default: return state
    }
}