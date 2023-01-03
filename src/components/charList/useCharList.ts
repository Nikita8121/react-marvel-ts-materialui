import { useState, useEffect } from "react";
import useMarvelService from "../../shared/hooks/marvelApi.hook";
import { ICharacter } from "../../shared/models/api/ICharacterResponse.interface";

interface IUseCharList {
  characters: Array<ICharacter>;
  loadingNewChars: boolean;
  loading: boolean;
  fetchChars: (offsetParam: number, initial?: boolean) => void;
  offset: number;
}

const useCharList = (): IUseCharList => {
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loadingNewChars, setLoadingNewChars] = useState<boolean>(false);
  const { getAllCharacters, loading } = useMarvelService();

  const onCharListLoaded = (charactersList: Array<ICharacter>) => {
    setCharacters((charactersListPrev) => [
      ...charactersListPrev,
      ...charactersList,
    ]);
    setOffset((offsetPrev) => offsetPrev + 9);
    setLoadingNewChars(false);
  };

  const fetchChars = (offsetParam: number, initial: boolean = false) => {
    initial ? setLoadingNewChars(false) : setLoadingNewChars(true);
    getAllCharacters(offsetParam).then(onCharListLoaded);
  };

  useEffect(() => {
    fetchChars(offset, true);
  }, []);

  return { characters, loadingNewChars, loading, fetchChars, offset };
};

export default useCharList;
