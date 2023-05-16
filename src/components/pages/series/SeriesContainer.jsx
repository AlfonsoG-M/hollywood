import { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/services";
import Series from "./Series";

const SeriesContainer = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => setSeries(res.data))
      .catch((errors) => console.log(errors));
  }, []);

  let seriesFiltered = series.filter((e)=>e.programType=== "series")
  return <Series series={seriesFiltered}/>;
};

export default SeriesContainer;
