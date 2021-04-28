const ListaDataItem=(props)=>{
    return(
        <li>
            <a href={props.msgLink}>{props.msg}</a>
        </li>
    )
}

export default ListaDataItem;
//la llmamos en el compoenente renderizacionElementos.js