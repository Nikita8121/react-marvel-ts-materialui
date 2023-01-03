import useHttp from "./http.hook";
import { IComicResponse, IComic } from "../models/api/IComicResponse.interface";
import {
  ICharacterResponse,
  ICharacter,
} from "../models/api/ICharacterResponse.interface";

interface IUseMarvelService {
  loading: boolean;
  error: string | null;
  getAllCharacters: (offset?: number) => Promise<Array<ICharacter>>;
  getCharacter: (id: number) => Promise<ICharacter>;
  clearError: () => void;
  getAllComics: (offset: number) => Promise<Array<IComic>>;
  getComic: (id: number) => Promise<IComic>;
}

const useMarvelService = (): IUseMarvelService => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _baseOffset = 210;
  const { REACT_APP_API_KEY, REACT_APP_API_TS, REACT_APP_API_HASH } =
    process.env;

  const defaultParams = {
    apikey: REACT_APP_API_KEY,
    ts: REACT_APP_API_TS,
    hash: REACT_APP_API_HASH,
  };

  const _transformComic = ({
    title,
    thumbnail: { path, extension },
    prices,
    id,
    description,
    pageCount,
  }: IComicResponse): IComic => {
    return {
      title,
      description: description
        ? `${description.slice(0, 210)}...`
        : "no description",
      thumbnail: `${path}.${extension}`,
      price: prices[0].price ? `${prices[0].price}$` : "not available",
      id,
      pageCount,
      language: "en-us",
    };
  };

  const _transformComics = (
    arrComics: Array<IComicResponse>,
  ): Array<IComic> => {
    return arrComics.map((comic) => _transformComic(comic));
  };

  const _transformCharacter = ({
    name,
    description,
    thumbnail,
    urls,
    comics: { items },
    id,
  }: ICharacterResponse): ICharacter => {
    return {
      name,
      description: description
        ? `${description.slice(0, 210)}...`
        : "no description",
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      wiki: urls[1].url,
      comics: items,
      id,
    };
  };

  const _transformCharacters = (arrChars: Array<ICharacterResponse>) => {
    return arrChars.map((char) => _transformCharacter(char));
  };

  const getAllCharacters = async (
    offset = _baseOffset,
  ): Promise<Array<ICharacter>> => {
    const res = await request(`${_apiBase}characters`, {
      limit: 9,
      offset,
      ...defaultParams,
    });
    return _transformCharacters(res.data.results);
  };

  const getCharacter = async (id: number): Promise<ICharacter> => {
    const res = await request(`${_apiBase}characters/${id}`, defaultParams);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset: number): Promise<Array<IComic>> => {
    const res = await request(`${_apiBase}comics`, {
      limit: 8,
      offset,
      ...defaultParams,
    });
    return _transformComics(res.data.results);
  };

  const getComic = async (id: number): Promise<IComic> => {
    const res = await request(`${_apiBase}comics/${id}`, defaultParams);
    return _transformComic(res.data.results[0]);
  };

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    clearError,
    getAllComics,
    getComic,
  };
};

export default useMarvelService;
