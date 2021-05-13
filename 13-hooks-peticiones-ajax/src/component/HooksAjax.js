import React,{useEffect, useState} from 'react';

const PokemonImage=({avatar,name})=>{
    return(
        <figure>
            <img src={avatar} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

const HooksAjax=()=>{
    //     const [pokemons,setPokemon]=useState([])

    //     useEffect(()=>{
    //         const apiURL='https://pokeapi.co/api/v2/pokemon/';
    //         fetch(apiURL)
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data.results)
    //             data.results.forEach(el=>{
    //                 // console.log(el.url)
    //                 fetch(el.url)
    //                 .then(res=>res.json())
    //                 .then(data=>{
    //                     // console.log(data)
    //                     let pokemon={
    //                         id:data.id,
    //                         pokemonName:data.name,
    //                         avatar:data.sprites.front_default,
    //                     }
                        
    // de esta manera solo imprime el ultimo no se porque
    //    let arrayPokemons=[...pokemons,pokemon];
    //     console.log(arrayPokemons)
    //     setPokemon(arrayPokemons)
    //---------------------------- IMPORTANTE-----------------------------------------
    // para no usar la variable de intermediario ArrayPokemons creamos una funcion
    //dentro de setPokemon y le pasamos un parametro y lo llamamos como queremos en este
    //caso pokemones y entre los corchetes destructuramos pokemones que es el 
    //array [pokemons] ose variable la toma como el array pokemons porque la creamos
    // arriba y la asociamos a esta funcion setPokemon. Despues de destructurar, le
    // agregamos el objeto
    //                 setPokemon((pokemones)=>[...pokemones,pokemon])
    //                 })
    //             })
    //         })
    //     },[])


    // HACEMOS LA FUNCION DE PETICION DE MANERA ASINCRONA
    const [pokemons,setPokemon]=useState([])
    const getPokemons= async(url)=>{
        const res= await fetch(url);
        const data= await res.json();
        data.results.forEach(async(el)=>{
            let res=await fetch(el.url)
            let data= await res.json()
            let pokemon={
                id:data.id,
                pokemonName:data.name,
                avatar:data.sprites.front_default,
            }
            //la p la toma com si estuvieramos llamando a la variable pokemons osea asi:
            // setPokemon([...pokemons,pokemon]) (pero de esta forma machaca el array y solo
            // muestra el ultimo array por eso destructuramos) 
	    //es decir que la p almacena el array y es como si reccorrieramos el arraypokemons
		//y al recorrelo agregammos el spreed operator y le unimos el obj pokemon
            setPokemon((p)=>[...p,pokemon])  
        })
    }
    //dentro del useEfect llamamos a la funcion getPokemons
    useEffect(()=>{
        getPokemons('https://pokeapi.co/api/v2/pokemon/')
    },[])
    return(
        <>
            <h2>Hooks - Ajax Componentes Funcionales</h2>
            {pokemons.length===0?<h3>cargando Pokemons</h3>:
                pokemons.map(el=>
                <PokemonImage key={el.id} name={el.pokemonName} avatar={el.avatar} ></PokemonImage>)   
            }
        </>
    )
}

export default  HooksAjax;

