import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import { IComic } from "../../shared/services/apiService/comicApiService/comic.api.service.types";

interface IProps {
  comic: IComic;
  addToCart: (item: IComic) => void;
}

const ComicCard = ({ comic, addToCart }: IProps) => {
  return (
    <Grid item xs={3} sx={{ mb: 3 }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={comic.thumbnail}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {comic.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comic.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }} disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton component={NavLink} to={`/comics/${comic._id}`}>
            <LinkIcon />
          </IconButton>
          <IconButton disabled={!comic.price} onClick={() => addToCart(comic)}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ComicCard;
