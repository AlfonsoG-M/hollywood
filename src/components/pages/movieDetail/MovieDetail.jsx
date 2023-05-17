import { Typography } from "@mui/material";
import "./movieDetail.css";

const MovieDetail = ({ movieInfo }) => {
  const { title, programType, description, releaseYear, images } = movieInfo;

  return (
    <div className="movieDetailContainer">
      <Typography variant="h3">{title}</Typography>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 500 }}
        textTransform={"uppercase"}
        variant="subtitle1"
      >
        {programType}
      </Typography>
      <div className="bottomdescriptionDiv">
        <img src={images.Poster.url} alt="" className="movieDetailImg" />
        <div className="descriptionDiv">
          <Typography variant="body2" sx={{color: "black"}} mb={"20px"} mt={"10px"}>Released in {releaseYear}</Typography>
          <Typography variant="body2" sx={{color: "black"}}>{description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
