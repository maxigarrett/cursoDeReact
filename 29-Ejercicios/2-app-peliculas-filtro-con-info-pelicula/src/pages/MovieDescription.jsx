import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { useEffect } from "react/cjs/react.development";
import { get } from "../helper/helHttp";
import styles from "../components/MovieList.module.css";
import stylesMovieDescription from "./MovieDescription.module.css";
export const MovieDescription = () => {
  //capturamos el id de la url al hacer clic en una pelicula
  const { idMovie } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const url = `https://api.themoviedb.org/3/movie/${idMovie}}`;
  useEffect(() => {
    get(url).then((data) => {
      console.log(data);
      setMovieDetail(data);
    });
  }, [url]);
  if (!movieDetail) return null;

  const imgDetails = `https://image.tmdb.org/t/p/w200/${movieDetail.poster_path}`;
  return (
    <section className={`${stylesMovieDescription.section}`}>
      <div>
        {/* <span>{movieDetail.original_language}</span>  */}
        <img src={imgDetails} className={styles.movieImg} alt="img" />
        <div>
          <p>{movieDetail.original_title}</p>
        </div>
      </div>
      <div className={`${stylesMovieDescription.description}`}>
        <strong>Description: </strong>
        {movieDetail.overview}
      </div>
    </section>
  );
};
