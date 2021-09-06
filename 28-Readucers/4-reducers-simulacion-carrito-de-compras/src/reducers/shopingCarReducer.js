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
                        //preguntamos si en ese erreglo car[] el id es igual al id del producto nuevo
                        //que estamos agregando al carrito desde el newItem 
                        el.id===itemInCarRepeat.id
                        //si es igual es decir que es repetido entonces le agregamo la nueva propiedad
                        //cauntity y le sumamos 1,antes de agregarle el cantity hacemos una copia del
                        //elemento original llamado el y despues le sumamos ese cuantity sino se borrara
                        //todo
                        ?{...el,cuantity:el.cuantity +1}
                        //sino lo deja como esta sin hacer nada
                        :el
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
        case TYPES.REMOVE_ONE_FROM_CAR:{}
        case TYPES.REMOVE_ALL_FROM_CAR:{
            console.log(id)
        }
        case TYPES.CLEAR_CAR:{}
        default: return state
    }
}