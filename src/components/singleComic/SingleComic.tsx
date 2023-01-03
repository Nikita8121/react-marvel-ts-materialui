import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useSingleComic from "./useSingeComic";
import "./singleComic.scss";

interface IProps {
  comicId: number;
}

const SingleComic = ({ comicId }: IProps) => {
  const { comic /* loading */ } = useSingleComic(comicId);

  return (
    <Grid
      sx={{ mt: 5 }}
      justifyContent="center"
      className="single-comic"
      container
    >
      <Grid item xs={3}>
        <img
          className="single-comic__img"
          src={comic?.thumbnail}
          alt={comic?.title}
        />
      </Grid>
      <Grid pl={2} item xs={6}>
        <Typography variant="h4">{comic?.title}</Typography>
        <Typography variant="body1">{comic?.description}</Typography>
        <Typography sx={{ fontWeight: 600 }} mt={5} variant="body1">
          price {comic?.price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SingleComic;
