import { useParams } from "react-router-dom";
import SingleComic from "../../components/singleComic/SingleComic";
/* import { IComic } from "../../shared/models/api/IComicResponse.interface"; */

const SingleComicPage = () => {
  const { id } = useParams();
  return (
    <>
      <SingleComic comicId={parseInt(id as string, 32)} />
    </>
  );
};

export default SingleComicPage;
