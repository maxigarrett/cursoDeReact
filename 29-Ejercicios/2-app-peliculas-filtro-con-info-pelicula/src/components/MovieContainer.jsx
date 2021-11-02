import { useLocation } from "react-router";
import { MovieList } from "./MovieList";
import { useEffect, useState } from "react";
import { get } from "../helper/helHttp";
import styles from './MovieContainer.module.css';
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";
import { FormMovieSearch } from "./FormMovieSearch";

export const MovieContainer=()=>{
    const [movies,setMovies]=useState([]);
    const [pageNumeration, setPageNumeration] = useState(1);
    const [hasMore, setHashMore] = useState(true)

 
    // NO SE PUEDE USAR useLocation JUNTO A LAS RUTAS POR eso LAS TRASLADE A APP.JS
    let  location = useLocation(); 
    let {search}=location
    let query=new URLSearchParams(search);
    const movieSearchParams =query.get('search');
    // console.log(movieSearchParams)

    
    useEffect(()=>{
                                    // MUY INPORTANTE
        // VERIFICAR SI ESTO SOLUCIONA EL PROBLEDE DE VUANDO VOLVEMOS AL INICION DE LA PELICULA SE 
        // RESETEA TODO Y QUEDA CON LAS PELICULAS CUANDO SE CARGA POR PRIMERA VES LA APP
        setMovies([]); 
        setPageNumeration(1)
        let movieSearch=movieSearchParams
            ?
                `https://api.themoviedb.org/3/search/movie?query=${movieSearchParams}&page=${pageNumeration}`
            :
                `https://api.themoviedb.org/3/discover/movie?page=${pageNumeration}`

            // hacemos lo mismo dentrode setMovie hacemos una funcion para rescatar el valor anterior 
            //y lo concatenamos el siguiente para que muerte las peliculas cuando se cargue la pag y
            //la segunda ,tercera y asi se van concatenando
        get(movieSearch).then(data=>{  
            setMovies((prevMovies)=>prevMovies.concat(data.results))
            //caundo la pagina no sea menor al total de pag dara false y se ocultara el loading porque
            //el hashmore esta en false
            setHashMore(data.page < data.total_pages)
        })
    },[movieSearchParams,pageNumeration])
    
    
    if(!movies) return null
   
//    console.log(pageNumeration)
    return (
        <>
            <FormMovieSearch setMovies={setMovies} setPageNumeration={setPageNumeration} />
            { /*libreria de react para usar un scroll infinito por si vienen muchas paginas de peliculas */}
            <InfiniteScroll 
                //le pasamos al infine scroo la cantidad actual de elementos del arreglo de peliculas
                dataLength={movies.length}

                // simpre que querramos actualizar el estado a partirde un estado anterior en este caso es 1
                //utilisaremos una funcion porque al actualizar el estado se hace de forma asincrona y si tenemos
                //varias act de estado dara algun fallo o no funcionara de la forma que queremos por eso actualisamos
                //en forma de funcion anonima en ves de setPageNumeration(pageNumeration +1) es mejor utilisar
                //setPageNumeration(prevPage=>prevPage+1)
               
                next={()=>setPageNumeration(prevPage=>prevPage+1)} //cuando lleguemos al final de la pag suma 1 porque el next se ejcuta cuando llega al final
                                                                    //de el listado del array le sumamos uno y se lo pasamos a la peticion fetch
                hasMore={hasMore}
                loader={<Loader/>}
            >
                <ul className={styles.movieContainer}>
                    {/*componente li*/}
                    {movies.map(movie=><MovieList key={movie.id} movie={movie} id={movie.id}/>)}
                </ul>
            </InfiniteScroll>
        </>
    )
}