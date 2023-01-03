import { useState, useEffect } from "react";
import useMarvelService from "../../shared/hooks/marvelApi.hook";
import { ICharacter } from "../../shared/models/api/ICharacterResponse.interface";

interface IUseRandomChar {
  character: ICharacter | null;
  updateCharacter: () => void;
  loading: boolean;
}

const useRandomChar = (): IUseRandomChar => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const { getCharacter, loading } = useMarvelService();

  const updateCharacter = (): void => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id).then((char: ICharacter) => {
      setCharacter(char);
    });
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  return { character, updateCharacter, loading };
};

export default useRandomChar;
