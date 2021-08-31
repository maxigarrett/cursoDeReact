export const ShoppingCarItem=({data,deleteCar})=>{
    // console.log(data)
    let {name,price,cuantity}=data;
    let result=price*cuantity
    return(
        <>
            <header>
                <h3>{name}</h3>
            </header>
            <span>${price}.00 cantidad {cuantity} = {result}</span>
            <button>Eliminar uno</button>
            <button>Eliminar todos</button>
        </>
    )
}