import React,{useState} from 'react';
import './SoundForm.css'
const initialForm={
    artist:'',
    song:''
}
export const SoundForm=({handlesearch, handleSaveSongs})=>{
    
    const [form,setForm]=useState(initialForm);
    const [isDisable,setIsDisable]=useState(true);
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!form.artist || !form.song){
            alert('Formulario incompleto')
            setIsDisable(true)//para mostrat el boton o no de favoritos
            return
        }
        else{
            handlesearch(form);
            setForm(initialForm);
            setIsDisable(false)
        }
    }
    
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='ingrese artista'
                onChange={handleChange}
                name='artist'
                value={form.artist} 
            />
            <input 
                type='text'
                name='song'
                placeholder='Nombre de la cancion'
                onChange={handleChange}
                value={form.song}
            />
            <input type='submit' value='Buscar'/>
            <input 
                type='button' 
                value='favoritos' 
                onClick={handleSaveSongs}
                disabled={isDisable && 'disable'}
            />
        </form>
    )
}