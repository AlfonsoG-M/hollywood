import { Typography } from "@mui/material";

const MovieDetail = ({ movieInfo }) => {
  const { title, programType, description, releaseYear } = movieInfo;


  return (
    <div>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle1">{programType}</Typography>
      <Typography variant="body2">Released in {releaseYear}</Typography>
      <Typography variant="body2">{description}</Typography>
    </div>
  );
};

export default MovieDetail;
