import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import Grid from "@mui/material/Grid";
import { ICharacter } from "../../models/api/IcharacterResponse.model";

interface IProps {
  character: ICharacter;
}

const CharCard = ({ character }: IProps) => {
  return (
    <Grid item xs={4} sx={{ mb: 3 }}>
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
          image={character.thumbnail}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="link">
            <LinkIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharCard;
