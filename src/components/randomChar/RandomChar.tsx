import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import useRandomChar from "./useRandomChar";
import { ICharacter } from "../../shared/services/apiService/characterApiService/Character.api.service.types";

interface IViewProps {
  character: ICharacter | undefined;
  updateCharacter: () => void;
}

const View = ({ character, updateCharacter }: IViewProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        flexGrow: 1,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", pr: 2 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {character?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {character?.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button onClick={updateCharacter} variant="contained">
            Update character
          </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: { md: 300, xs: 151 },
          minHeight: 200,
          maxHeight: { md: 300, xs: 151 },
        }}
        image={character?.thumbnail}
        alt={character?.name}
      />
    </Card>
  );
};

const Loader = () => {
  return (
    <Box>
      <Skeleton sx={{ height: 100 }} />
      <Skeleton sx={{ height: 100 }} />
    </Box>
  );
};

const RandomChar = () => {
  const { character, updateCharacter, loading } = useRandomChar();

  const loader = loading ? <Loader /> : null;
  const content = !loading ? (
    <View character={character} updateCharacter={updateCharacter} />
  ) : null;

  return (
    <Box sx={{ margin: "1rem 0" }}>
      {content}
      {loader}
    </Box>
  );
};

export default RandomChar;
