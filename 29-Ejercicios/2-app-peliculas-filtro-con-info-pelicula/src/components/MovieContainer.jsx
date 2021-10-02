import { BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import { MovieList } from "./MovieList";
import { useEffect, useState } from "react";
import { get } from "../helper/helHttp";


export const MovieContainer=()=>{
    const [movies,setMovies]=useState([]);
    const url='https://api.themoviedb.org/3/discover/movie';
    useEffect(()=>{
        get(url).then(data=>setMovies(data.results))
    },[url])
    return (
        <>
           <Router>
                <header>
                    <Link to='/'>Movies</Link>
                </header>
                <Switch>
                    <Route exact path='/'>
                        <ul>
                            {/*componente li*/}
                            {movies.map(movie=><MovieList key={movie.id} movie={movie} id={movie.id}/>)}
                        
                        </ul>
                    </Route>
                    <Route exact path='/info/:idMovie'>
                        <h3>Info de pelicula</h3>
                    </Route>
                </Switch>
           </Router>

        </>
    )
}