import { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/services";
import Series from "./Series";
import { Box, CircularProgress } from "@mui/material";
import Error from "../../common/error/Error";

const SeriesContainer = () => {
  const [series, setSeries] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((res) => setSeries(res.data))
      .catch((errors) => setIsError(true));
  }, []);

  let seriesFiltered = series.filter((e) => {
    return e.programType === "series";
  });
  return (
    <div>
      {seriesFiltered.length > 0 && <Series series={seriesFiltered} />}
      {seriesFiltered.length === 0 && !isError && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {isError && <Error />}
    </div>
  );
};

export default SeriesContainer;
