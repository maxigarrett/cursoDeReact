export const ShoppingCarItem=({data,delOneFromCar,delAllFromCar})=>{
    // console.log(data)
    let {id,name,price,cuantity}=data;
    let result=price*cuantity
    return(
        <>
            <header>
                <h3>{name}</h3>
            </header>
            <span>${price}.00 cantidad {cuantity} = {result}</span>
            <button onClick={()=>delOneFromCar(id)}>Eliminar uno</button>
            <button onClick={()=>delAllFromCar(id,true)}>Eliminar todos</button>
        </>
    )
}