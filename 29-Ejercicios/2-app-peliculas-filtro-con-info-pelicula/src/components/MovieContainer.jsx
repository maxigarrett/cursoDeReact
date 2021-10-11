import { useLocation } from "react-router";
import { MovieList } from "./MovieList";
import { useEffect, useState } from "react";
import { get } from "../helper/helHttp";
import styles from './MovieContainer.module.css';

export const MovieContainer=()=>{
    const [movies,setMovies]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const url='https://api.themoviedb.org/3/discover/movie';
 
    // NO SE PUEDE USAR useLocation JUNTO A LAS RUTAS POR eso LAS TRASLADE A APP.JS
    let  location = useLocation(); 
    let {search}=location
    let query=new URLSearchParams(search);
    const movieSearchParams =query.get('search');
    // console.log(movieSearchParams)

    
    useEffect(()=>{
        setIsLoading(true)
        let movieSearch=movieSearchParams?`https://api.themoviedb.org/3/search/movie?query=${movieSearchParams}`:'https://api.themoviedb.org/3/discover/movie'
        get(movieSearch).then(data=>setMovies(data.results))
        setIsLoading(false)
    },[movieSearchParams])
    
    
    if(!movies) return null
   
   
    return (
        <>

            <ul className={styles.movieContainer}>
                {isLoading && 'loading..'} 
                    {/*componente li*/}
                    {movies.map(movie=><MovieList key={movie.id} movie={movie} id={movie.id}/>)}
            </ul>
      
        </>
    )
}