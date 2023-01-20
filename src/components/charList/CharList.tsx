import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useCharList from "./useCharList";
import CharCard from "../charCard/CharCard";
import { ICharacter } from "../../shared/services/apiService/characterApiService/Character.api.service.types";

interface IViewProps {
  characters: ICharacter[] | undefined;
}

const View = ({ characters }: IViewProps) => {
  return (
    <>
      {characters?.map((char) => {
        return <CharCard key={char._id} character={char} />;
      })}
    </>
  );
};

const Loader = () => {
  return (
    <>
      {[null, null, null].map((val, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Grid key={i.toString()} item xs={4} sx={{ mb: 3 }}>
            <Skeleton sx={{ minHeight: 80 }} />
            <Skeleton sx={{ minHeight: 80 }} animation="wave" />
            <Skeleton sx={{ minHeight: 80 }} animation={false} />
          </Grid>
        );
      })}
    </>
  );
};

const CharList = () => {
  const {
    characters,
    loadingNewChars,
    loading,
    fetchChars,
    hasMoreCharacters,
  } = useCharList();

  const content =
    !loading || loadingNewChars ? <View characters={characters} /> : null;
  const loader = loading && !loadingNewChars ? <Loader /> : null;

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {content}
        {loader}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {hasMoreCharacters ? (
          <Button
            disabled={loadingNewChars}
            onClick={() => fetchChars()}
            variant="contained"
          >
            {loadingNewChars ? "loading..." : "Load more"}
          </Button>
        ) : null}
      </Box>
    </>
  );
};

export default CharList;
