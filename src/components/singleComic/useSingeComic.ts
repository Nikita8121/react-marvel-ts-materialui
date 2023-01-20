import { useEffect } from "react";
import { useComic } from "../../shared/hooks/Comic.api.hook";

const useSingleComic = (comicId: string) => {
  const { data, isLoading } = useComic(comicId);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return { comic: data, loading: isLoading };
};

export default useSingleComic;
