import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import useCharList from "./useCharList";
import CharCard from "../charCard/CharCard";
import { ICharacter } from "../../models/api/IcharacterResponse.model";

interface IViewProps {
  characters: Array<ICharacter>;
}

const View = ({ characters }: IViewProps) => {
  console.log(characters);
  return (
    <>
      {characters.map((char) => {
        return <CharCard key={char.id} character={char} />;
      })}
    </>
  );
};

const Loader = () => {
  return (
    <>
      {new Array(9).map(() => {
        return (
          <>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </>
        );
      })}
    </>
  );
};

const CharList = () => {
  const { characters, loadingNewChars, loading } = useCharList();

  const content = !loading ? <View characters={characters} /> : null;
  const loader = loading && !loadingNewChars ? <Loader /> : null;

  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {content}
      {loader}
    </Grid>
  );
};

export default CharList;
