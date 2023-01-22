import { useComicsQuery } from "../../shared/hooks/comic.api.hook";
import { IComic } from "../../shared/services/apiService/comicApiService/comic.api.service.types";
import transformApiResponse from "../../shared/utils/ApiUtils";

const useComicList = () => {
  const { data, fetchNextPage, isFetchingNextPage, isFetching } =
    useComicsQuery(0);

  return {
    comics: transformApiResponse(data?.pages) as IComic[] | undefined,
    loadingNewComics: isFetchingNextPage,
    loading: isFetching,
    fetchComics: fetchNextPage,
  };
};

export default useComicList;
