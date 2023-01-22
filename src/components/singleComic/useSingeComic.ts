import { useComicQuery } from "../../shared/hooks/comic.api.hook";

const useSingleComic = (comicId: string) => {
  const { data, isLoading } = useComicQuery(comicId);

  return { comic: data, loading: isLoading };
};

export default useSingleComic;
