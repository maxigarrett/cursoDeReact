export const ShoppingProducts=({data,addToCar})=>{
    const{id,name,price}=data
    return(
        <article className='articleCard'>
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={()=>addToCar(id)}>Add To Car</button>
        </article>
    )
}