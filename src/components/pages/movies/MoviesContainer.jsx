import { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/services";
import Movies from "./Movies";
import { Box, CircularProgress } from "@mui/material";
import Error from "../../common/error/Error";

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((res) => setMovies(res.data))
      .catch((errors) => setIsError(true));
  }, []);

  let moviesFiltered = movies.filter((e) => {
    return e.programType === "movie";
  });
  return (
    <div>
      {moviesFiltered.length > 0 && <Movies movies={moviesFiltered} />}
      {moviesFiltered.length === 0 && !isError && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {isError && <Error />}
    </div>
  );
};

export default MoviesContainer;
