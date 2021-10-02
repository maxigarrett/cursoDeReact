import { Link } from "react-router-dom"

export const MovieList=({movie,id})=>{
    // console.log(movie)
    const img=`https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
    // console.log(img)
    return (
        <>
            <li>
                <Link to={`/info/${id}`}>
                    <img src={img} alt='img'/>
                    <div>
                        <p>{movie.title}</p> 
                    </div>
                </Link>
            </li>
        </>
    )
}