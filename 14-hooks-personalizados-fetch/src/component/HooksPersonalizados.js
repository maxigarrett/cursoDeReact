import React from 'react';
import {useFetch,useState} from '../hooks/useFetch'
const PokemonsList=({name,imgAvatar})=>{
    <div>
        <img src={imgAvatar}></img>
        <figcaption>{name}</figcaption>
    </div>
}
export const HooksPersonalizados=()=>{
    let Url='https://pokeapi.co/api/v2/pokemons/';
    const [pokemons,setPokemon]=useState([])

    let {data,isPending,error}=useFetch(Url)//destructuramos el objeto que devuelve useFetch
    data===null?data={}:data.results.forEach(async(el)=>{
        const res= await fetch(el.url)
        const data= await res.json()
        console.log(data)
       let pokemon={
            id:data.id,
            namePokemon:data.name,
            imgAvatar:data.fron_default
        }
        setPokemon((pokemons)=>[...pokemons,pokemon])
    })
    console.log(pokemons)
    
    return(
        <>
            <h2>Hooks - Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <h3>{JSON.stringify(data)}</h3>
            {pokemons.map(pokemonElement=>{
                <PokemonsList key={pokemonElement.id} name={pokemonElement.namePokemon} imgAvatar={pokemonElement.imgAvatar} />
            })}
        </>
        
    )
}

export default HooksPersonalizados;