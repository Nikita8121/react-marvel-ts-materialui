import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useComicList from "./useComicList";
import ComicCard from "../comicCard/ComicCard";

import { IComic } from "../../shared/models/api/IComicResponse.interface";

interface IViewProps {
  comics: Array<IComic>;
}

const View = ({ comics }: IViewProps) => {
  return (
    <>
      {comics.map((comic) => {
        return <ComicCard key={comic.id} comic={comic} />;
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
  const { comics, loadingNewComics, loading, fetchComics, offset } =
    useComicList();

  const content =
    !loading || loadingNewComics ? <View comics={comics} /> : null;
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
          onClick={() => fetchComics(offset)}
          variant="contained"
        >
          {loadingNewComics ? "loading..." : "Load more"}
        </Button>
      </Box>
    </>
  );
};

export default ComicList;
