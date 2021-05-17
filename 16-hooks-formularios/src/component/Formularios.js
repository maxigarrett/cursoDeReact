import React,{useState} from 'react';

export const Formularios=()=>{
    // // esta forma de validar es para un formulario sencillo
    // const [name,setName]=useState('')
    // const [taste,setTaste]=useState('')//taste significa sabor
    // const [lenguajes,setLenguajes]=useState('')
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     alert('form enviado')
    // }
    // return(
    //     <>
    //         <h1>Formularios</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label htmlFor='name'>name</label>
    //             {/*usar value solo tira un warning porque pide que usemos defaultValue o un evento
    //             de tipo onChange por si cambia el valor del input*/}
    //             <input 
    //                 type='text' 
    //                 id='name' 
    //                 name='name' 
    //                 value={name}
    //                 //sin esto salta el warning porque detecta que es un input no controlado que seria
    //                 //usar referencias como id para capturar los valores por eso pide que usemos
    //                 //el evento onchange para que este alerta a cualquier cambio del input y le pasamos
    //                 //el evento e para caputar el valor y pasarlo a la variable de estado mediante setName
    //                 onChange={(e)=>setName(e.target.value)}
    //             />

    //             {/*RADIO BUTTON */}
    //             <p>ELIJE TU SABOR FAVORITO</p>
    //             <label htmlFor='chocolate'>chocolate</label>
    //             <input
    //                 type='radio'
    //                 name='sabor'
    //                 id='chocolate'
    //                 //para que funcione y se actualice el estado debemos poner el valor de manera
    //                 //manuel y no que se llene de manera automatica como value={taste} ya que tiene
    //                 //valor por defecto vacio y eso es lo que pondra en el value, es diferente de
    //                 // los input text o area
    //                 value='chocolate'
    //                 defaultChecked//no lo recomiendo porque en el dom se chequea pero no tiene valor asignado al value preferible que lo cheque el ususario
    //                 onChange={(e)=>setTaste(e.target.value)}
    //                 >
    //             </input>
    //             <label htmlFor='chele'>dulce de chele</label>
    //             <input
    //                 type='radio'
    //                 name='sabor'
    //                 id='chele'
    //                 value='chele'
    //                 onChange={(e)=>setTaste(e.target.value)}
    //                 >
    //             </input>
    //             <label htmlFor='menta'>menta</label>
    //             <input
    //                 type='radio'
    //                 name='sabor'
    //                 id='menta'
    //                 value='menta'
    //                 onChange={(e)=>setTaste(e.target.value)}
    //                 >
    //             </input>

    //             {/* LISTA */}
    //             <p>Lenguaje favorito</p>
    //             <select name='lenguaje' onChange={(e)=>setLenguajes(e.target.value)}
    //             defaultValue=''>{/*por defecto igual que el titulo*/}
    //                 <optgroup>
    //                     <option value=''>-----lenguaje favorito-----</option>
    //                     <option value='js'>javaScript</option>
    //                     <option value='php'>PHP</option>
    //                     <option value='python'>Python</option>
    //                     <option value='go'>GO</option>
    //                     <option value='ruby'>Ruby</option>
    //                 </optgroup>
    //             </select>
    //             <input type='submit' value='Enviar'></input>
    //         </form>
    //         <p>{`${name}- ${taste}-${lenguajes}`}</p>
    //     </>
    // )


    //VALIDACION SI HAY MUCHOS CAMPOS CON UN SOLO ESTADO
    
    //usamos una variable de estado sola 
    const [form,setForm]=useState({})
    const handleChange=(e)=>{
        //con el spredoperator decimos que ponga lo que tenga la variable form mas el name
        //de los formularios:con su valor
        setForm({
            ...form,
            //se almacena destructurando el name de los input : se almacena el valor de los input
            [e.target.name]:e.target.value,
        })
        console.log(e.target.name)

    }
    const hendleSubmit=(e)=>{
        e.preventDefault();
        alert('form enviado')
        //comolos valores de form estan dentro de un objeto entonces para acceder a ellos lo hacemos
        //mediante nombreDelObj.valor osea propiedad:valor
        console.log(form.name,form.sabor,form.lenguaje)
    }
    //si chequeo los terminos
    const handleCheked=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
    }
     return(
         <>
            <h1>Formularios</h1>
            <form onSubmit={hendleSubmit} >
                <label htmlFor='name'>name</label>
                <input 
                     type='text' 
                     id='name' 
                     name='nombre' 
                     onChange={handleChange}
                />
 
                 {/*RADIO BUTTON */}
                <p>ELIJE TU SABOR FAVORITO</p>
                <label htmlFor='chocolate'>chocolate</label>
                <input
                     type='radio'
                     name='sabor'
                     id='chocolate'
                     value='chocolate'
                     onChange={handleChange}
                    >
                </input>
                <label htmlFor='chele'>dulce de chele</label>
                <input
                     type='radio'
                     name='sabor'
                     id='chele'
                     value='chele'
                     onChange={handleChange}
                     >
                </input>
                <label htmlFor='menta'>menta</label>
                <input
                     type='radio'
                     name='sabor'
                     id='menta'
                     value='menta'
                     onChange={handleChange}
                    >
                </input>
 
                 {/* LISTA */}
                <p>Lenguaje favorito</p>
                <select name='lenguaje' onChange={handleChange}
                defaultValue=''>
                    <optgroup>
                        <option value=''>-----lenguaje favorito-----</option>
                        <option value='js'>javaScript</option>
                        <option value='php'>PHP</option>
                        <option value='python'>Python</option>
                        <option value='go'>GO</option>
                        <option value='ruby'>Ruby</option>
                    </optgroup>
                </select>
                <label>acepto terminos y condiicones</label>
                <input 
                    type='checkbox'
                    name='terminos'
                    onChange={handleCheked}
                    >
                </input>
                <input type='submit' value='Enviar'></input>
            </form>
            <p>{`${form.nombre}- ${form.sabor}-${form.lenguaje}`}</p>
         </>
    )
}

