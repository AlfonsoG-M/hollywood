import { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/services";
import Movies from "./Movies";
import { Box, CircularProgress } from "@mui/material";


const MoviesContainer = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => setMovies(res.data))
      .catch((errors) => console.log(errors));
  }, []);

  let moviesFiltered = movies.filter((e) => {
    return e.programType === "movie";
  });
  return <div>
    {
      moviesFiltered.length > 0 ? <Movies movies={moviesFiltered}/> : <Box sx={{display:"flex", justifyContent:"center"}}><CircularProgress /></Box>
    }
  </div>
};

export default MoviesContainer;
