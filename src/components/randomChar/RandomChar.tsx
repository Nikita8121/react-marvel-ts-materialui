import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import useMarvelService from "../../hooks/marvelApi.hook";
import { ICharacter } from "../../models/api/IcharacterResponse.model";

const RandomChar = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const { getCharacter } = useMarvelService();

  const updateCharacter = (): void => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id).then((char: ICharacter) => {
      setCharacter(char);
    });
  };

  useEffect(() => {
    console.log(character);
  }, [character]);

  useEffect(() => {
    updateCharacter();
  }, []);

  return (
    <Grid sx={{ padding: "1rem 0" }} container>
      <Grid item sm={5} xs={12}>
        ergreg
      </Grid>

      <Divider sx={{ margin: "0 auto" }} orientation="vertical" flexItem />

      <Grid sx={{ marginLeft: "auto" }} item sm={5} xs={12}>
        ergeg
      </Grid>
    </Grid>
  );
};

export default RandomChar;
