export const ShoppingCarItem=({data,deleteCar})=>{
    // console.log(data)
    let {id,name,price,cuantity}=data;
    let result=price*cuantity
    return(
        <>
            <header>
                <h3>{name}</h3>
            </header>
            <span>${price}.00 cantidad {cuantity} = {result}</span>
            <button onClick={()=>deleteCar(id)}>Eliminar uno</button>
            <button onClick={()=>deleteCar(id,true)}>Eliminar todos</button>
        </>
    )
}