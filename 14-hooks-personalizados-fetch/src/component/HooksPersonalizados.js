import React from 'react';
import {useFetch} from '../hooks/useFetch'
export const HooksPersonalizados=()=>{
    let Url='https://pokeapi.co/api/v2/pokemon/';

    let {data,isPending,error}=useFetch(Url)//destructuramos el objeto que devuelve useFetch
    
    {data===null?data={}:data.results.forEach(async(el)=>{
        const res= await fetch(el.url)
        const data= await res.json()
        console.log(data)
    })}

    return(
        <>
            <h2>Hooks - Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <h3>{JSON.stringify(data)}</h3>
        </>
        
    )
}

export default HooksPersonalizados;