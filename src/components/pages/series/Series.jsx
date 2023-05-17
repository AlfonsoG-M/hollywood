import "./series.css";
import { Link } from "react-router-dom";

const Series = ({ series }) => {
  return (
    <div className="seriesContainer">
      {series.map((serie) => {
        return (
          <Link to={`/movieDetail/${serie.id}`} key={serie.title} style={{textDecoration:"none"}}>
            <div className="cardDiv">
              <img
                src={serie.images.Poster.url}
                alt="imagen serie"
                className="seriesImg"
              />
              <p>{serie.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Series;
