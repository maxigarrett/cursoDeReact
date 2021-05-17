import React,{useState} from 'react';

export const Formularios=()=>{
    const [name,setName]=useState('')
    const [taste,setTaste]=useState('')//taste significa sabor
    const [lenguajes,setLenguajes]=useState('')
    return(
        <>
            <h1>Formularios</h1>
            <form >
                <label htmlFor='name'>name</label>
                {/*usar value solo tira un warning porque pide que usemos defaultValue o un evento
                de tipo onChange por si cambia el valor del input*/}
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={name}
                    //sin esto salta el warning porque detecta que es un input no controlado que seria
                    //usar referencias como id para capturar los valores por eso pide que usemos
                    //el evento onchange para que este alerta a cualquier cambio del input y le pasamos
                    //el evento e para caputar el valor y pasarlo a la variable de estado mediante setName
                    onChange={(e)=>setName(e.target.value)}
                />

                {/*RADIO BUTTON */}
                <p>ELIJE TU SABOR FAVORITO</p>
                <label htmlFor='chocolate'>chocolate</label>
                <input
                    type='radio'
                    name='sabor'
                    id='chocolate'
                    //para que funcione y se actualice el estado debemos poner el valor de manera
                    //manuel y no que se llene de manera automatica como value={taste} ya que tiene
                    //valor por defecto vacio y eso es lo que pondra en el value, es diferente de
                    // los input text o area
                    value='chocolate'
                    defaultChecked//no lo recomiendo porque en el dom se chequea pero no tiene valor asignado al value preferible que lo cheque el ususario
                    onChange={(e)=>setTaste(e.target.value)}
                    >
                </input>
                <label htmlFor='chele'>dulce de chele</label>
                <input
                    type='radio'
                    name='sabor'
                    id='chele'
                    value='chele'
                    onChange={(e)=>setTaste(e.target.value)}
                    >
                </input>
                <label htmlFor='menta'>menta</label>
                <input
                    type='radio'
                    name='sabor'
                    id='menta'
                    value='menta'
                    onChange={(e)=>setTaste(e.target.value)}
                    >
                </input>

                {/* LISTA */}
                <p>Lenguaje favorito</p>
                <select name='lenguaje' onChange={(e)=>setLenguajes(e.target.value)}>
                    <optgroup>
                        <option value=''>-----lenguaje favorito-----</option>
                        <option value='js'>javaScript</option>
                        <option value='php'>PHP</option>
                        <option value='python'>Python</option>
                        <option value='go'>GO</option>
                        <option value='ruby'>Ruby</option>
                    </optgroup>
                </select>
            </form>
        </>
    )
}

