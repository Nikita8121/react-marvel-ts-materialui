import { useComics } from "../../shared/hooks/Comic.api.hook";
import { IComic } from "../../shared/services/apiService/comicApiService/Comic.api.service.types";
import transformApiResponse from "../../shared/utils/ApiUtils";

const useComicList = () => {
  const { data, fetchNextPage, isFetchingNextPage, isFetching } = useComics(0);

  return {
    comics: transformApiResponse(data?.pages) as IComic[] | undefined,
    loadingNewComics: isFetchingNextPage,
    loading: isFetching,
    fetchComics: fetchNextPage,
  };
};

export default useComicList;
