import React,{Component} from 'react'
const ComponentPokemons=(props)=>{
    return(
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}
export default class Peticiones extends Component{
    state={
        pokemons:[]
    }

    //en este metodo se hacen las peticiones a las APIs
    async componentDidMount(){
        const apiURL='https://pokeapi.co/api/v2/pokemon/';
        let res=await fetch(apiURL);
        let data=await res.json();//se almacena toda la info de la API
        console.log(data.results)//en result esta el array de objeto de pokemons de la API
        await data.results.forEach(el=>{
            console.log(el.url)//vamos a consultar la url para obtener la info de cada pokemon
            fetch(el.url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                //almacenamos en un objeto la data de los pokemones
                let pokemon={
                    id:data.id,
                    name:data.name,
                    imgAvatar:data.sprites.front_default
                }
                //creamos un array y con spreed operator ponemos el array de estado osea lo que contiene
                //mas el objeto pokemon que almacena info de la api
                let pokemonArray=[...this.state.pokemons,pokemon]
                this.setState({pokemons:pokemonArray})//hay que usar setState para modificarla de vacio a llenarla
            })
        })
    }

    render(){
        return(
            <>
                <h2>Peticones AJAX/FETC</h2>
                {/*si el array del state esta vacio dira cargando sino mostrara la info*/}
                {this.state.pokemons.length===0?
                    <h2>cargando...</h2>: 
                    this.state.pokemons.map(el=>
                    <ComponentPokemons key={el.id} avatar={el.imgAvatar} name={el.name}>
                    </ComponentPokemons>)
                }
            </>

        )
    }
}
