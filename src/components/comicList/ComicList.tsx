import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useComicList from "./useComicList";
import ComicCard from "../comicCard/ComicCard";

import { IComic } from "../../shared/services/apiService/comicApiService/comic.api.service.types";

interface IViewProps {
  comics: IComic[] | undefined;
  addToCart: (item: IComic) => void;
}

const View = ({ comics, addToCart }: IViewProps) => {
  return (
    <>
      {comics &&
        comics?.map((comic) => {
          return (
            <ComicCard addToCart={addToCart} key={comic?._id} comic={comic} />
          );
        })}
    </>
  );
};

const Loader = () => {
  return (
    <>
      {[null, null, null, null].map((val, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Grid key={i.toString()} item xs={3} sx={{ mb: 3 }}>
            <Skeleton sx={{ minHeight: 80 }} />
            <Skeleton sx={{ minHeight: 80 }} animation="wave" />
            <Skeleton sx={{ minHeight: 80 }} animation={false} />
          </Grid>
        );
      })}
    </>
  );
};

const ComicList = () => {
  const { comics, loadingNewComics, loading, fetchComics, addToCart } =
    useComicList();

  const content =
    !loading || loadingNewComics ? (
      <View addToCart={addToCart} comics={comics} />
    ) : null;
  const loader = loading && !loadingNewComics ? <Loader /> : null;

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {content}
        {loader}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          disabled={loadingNewComics}
          onClick={() => fetchComics()}
          variant="contained"
        >
          {loadingNewComics ? "loading..." : "Load more"}
        </Button>
      </Box>
    </>
  );
};

export default ComicList;
