import { BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import { MovieList } from "./MovieList";
import { useEffect, useState } from "react";
import { get } from "../helper/helHttp";
import styles from './MovieContainer.module.css';
import { MovieDescription } from "../pages/MovieDescription";

export const MovieContainer=()=>{
    const [movies,setMovies]=useState([]);
    const url='https://api.themoviedb.org/3/discover/movie';
    useEffect(()=>{
        get(url).then(data=>setMovies(data.results))
    },[url])
    if(!movies) return null
    return (
        <>
           <Router>
                <header className={styles.header}>
                    <Link className={styles.movieList} to='/'>Movies</Link>
                </header>
                <Switch>
                    <Route exact path='/'>
                        <ul className={styles.movieContainer}>
                            {/*componente li*/}
                            {movies.map(movie=><MovieList key={movie.id} movie={movie} id={movie.id}/>)}
                        
                        </ul>
                    </Route>
                    <Route exact path='/info/:idMovie'>
                        <MovieDescription/>
                    </Route>
                </Switch>
           </Router>
        </>
    )
}