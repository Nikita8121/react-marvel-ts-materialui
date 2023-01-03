import { useState, useEffect } from "react";
import useMarvelService from "../../shared/hooks/marvelApi.hook";
import { IComic } from "../../shared/models/api/IComicResponse.interface";

const useSingleComic = (comicId: number) => {
  const [comic, setComic] = useState<IComic>();
  const { getComic, loading } = useMarvelService();

  const onComicLoaded = (fetchedComic: IComic) => {
    setComic(fetchedComic);
  };

  const fetchComic = (id: number) => {
    getComic(id).then(onComicLoaded);
  };

  useEffect(() => {
    fetchComic(comicId);
  }, []);

  return { comic, loading };
};

export default useSingleComic;
