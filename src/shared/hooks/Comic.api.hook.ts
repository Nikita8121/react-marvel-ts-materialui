import { useInfiniteQuery, useQuery } from "react-query";

import {
  getAllComics,
  getComic,
} from "../services/apiService/comicApiService/comic.api.service";

const useComicsQuery = (offset: number) => {
  return useInfiniteQuery({
    queryKey: ["comics", offset],
    queryFn: async ({ pageParam = offset }) => {
      const data = await getAllComics(pageParam);
      return data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.offset < lastPage.total) {
        return lastPage.offset + 8;
      }
      return false;
    },
  });
};

const useComicQuery = (id: string) =>
  useQuery({
    queryKey: ["comic", id],
    queryFn: async () => getComic(id),
  });

export { useComicsQuery, useComicQuery };
