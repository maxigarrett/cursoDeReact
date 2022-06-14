import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";
export const MovieList = ({ movie, id }) => {
  //   console.log(movie);
  const img = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  // console.log(img)
  return (
    <li className={styles.movieList}>
      <Link to={`/info/${id}`} className={styles.movieList}>
        <img className={styles.movieImg} src={img} alt="img" />
        <div>
          <p className={styles.movieTitle}>{movie.title}</p>
        </div>
      </Link>
    </li>
  );
};
