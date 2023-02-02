import { useSnackbar } from "notistack";
import { useComicsQuery } from "../../shared/hooks/comic.api.hook";
import { IComic } from "../../shared/services/apiService/comicApiService/comic.api.service.types";
import transformApiResponse from "../../shared/utils/apiUtils";
import useAddItem from "../../shared/hooks/cart.hooks/addItem.hook";

const useComicList = () => {
  const { data, fetchNextPage, isFetchingNextPage, isFetching } =
    useComicsQuery(0);

  const { enqueueSnackbar } = useSnackbar();
  const { addItem } = useAddItem();

  const addToCart = (item: IComic): void => {
    addItem(item);
    enqueueSnackbar("Item added", {
      variant: "success",
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
  };

  return {
    comics: transformApiResponse(data?.pages) as IComic[] | undefined,
    loadingNewComics: isFetchingNextPage,
    loading: isFetching,
    fetchComics: fetchNextPage,
    addToCart,
  };
};

export default useComicList;
