import { Link } from "react-router-dom";
import moviesImg from "../../../assets/img/movies.jpg";
import seriesImg from "../../../assets/img/series.jpg";
import "./home.css";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="homeContainer">
      <Link to={"/series"} className="linkDiv">
        <img src={seriesImg} alt="Series image" />
        <Typography variant="subtitle1" color={"primary"}>Popular Series</Typography>
      </Link>

      <Link to={"/movies"} className="linkDiv">
        <img src={moviesImg} alt="Series image" />
        <Typography variant="subtitle1" color={"primary"}>  Popular Movies</Typography>
      </Link>
    </div>
  );
};

export default Home;
