import { useSnackbar } from "notistack";
import { useComicsQuery } from "../../shared/hooks/comic.api.hook";
import { IComic } from "../../shared/services/apiService/comicApiService/comic.api.service.types";
import transformApiResponse from "../../shared/utils/apiUtils";
import useCartStore from "../../store/cartStore";

const useComicList = () => {
  const { data, fetchNextPage, isFetchingNextPage, isFetching } =
    useComicsQuery(0);

  const { enqueueSnackbar } = useSnackbar();
  const addItem = useCartStore((state) => state.addItem);

  const addToCart = (item: IComic): void => {
    addItem(item);
    enqueueSnackbar("Item added", {
      variant: "success",
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom",
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
