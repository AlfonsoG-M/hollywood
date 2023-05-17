import { Link } from "react-router-dom";
import "./movies.css";

const Movies = ({ movies }) => {
  return (
    <div className="moviesContainer">
      {movies.map((movie) => {
        return (
          <Link to={`/movieDetail/${movie.id}`} key={movie.title} style={{textDecoration:"none"}}>
            <div className="cardDiv">
              <img
                src={movie.images.Poster.url}
                alt="imagen pelicula"
                className="moviesImg"
              />
              <p>{movie.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
