import Home from "../components/pages/home/Home";
import MovieDetailContainer from "../components/pages/movieDetail/MovieDetailContainer";
import MoviesContainer from "../components/pages/movies/MoviesContainer";
import SeriesContainer from "../components/pages/series/SeriesContainer";

export let routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "movies",
    path: "/movies",
    Element: MoviesContainer,
  },
  {
    id: "series",
    path: "/series",
    Element: SeriesContainer,
  },
  {
    id: "movieDetail",
    path: "/movieDetail/:id",
    Element: MovieDetailContainer,
  }

];