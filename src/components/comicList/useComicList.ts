import { useState, useEffect } from "react";
import useMarvelService from "../../shared/hooks/marvelApi.hook";
import { IComic } from "../../shared/models/api/IComicResponse.interface";

const useComicList = () => {
  const [comics, setComics] = useState<Array<IComic>>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loadingNewComics, setLoadingNewComics] = useState<boolean>(false);
  const { getAllComics, loading } = useMarvelService();

  const onComicListLoaded = (comicsList: Array<IComic>) => {
    setComics((comicsListPrev) => [...comicsListPrev, ...comicsList]);
    setOffset((offsetPrev) => offsetPrev + 9);
    setLoadingNewComics(false);
  };

  const fetchComics = (offsetParam: number, initial: boolean = false) => {
    initial ? setLoadingNewComics(false) : setLoadingNewComics(true);
    getAllComics(offsetParam).then(onComicListLoaded);
  };

  useEffect(() => {
    fetchComics(offset, true);
  }, []);

  return { comics, loadingNewComics, loading, fetchComics, offset };
};

export default useComicList;
