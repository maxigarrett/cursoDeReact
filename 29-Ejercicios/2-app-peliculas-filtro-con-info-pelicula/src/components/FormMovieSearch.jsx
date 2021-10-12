import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import  style from './FormMovieSearch.module.css'
const initialFormSearch={
    search:''
}
export  const FormMovieSearch=()=> {
    const [form, setForm] = useState(initialFormSearch)
    const history = useHistory();

    const handelChange=(e)=>{
        const {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        if(!form.search || form.search==='') return alert('ingrese algun dato a buscar');
        history.push(`?search=${form.search}`)
    }
    return (
            <form onSubmit={handelSubmit} className={style.form}>
                <input 
                    type="text"
                    name='search'
                    onChange={handelChange}
                    value={form.search} 
                />
                <button type="submit">buscar</button>
            </form>     
    )
}
