import axios from "axios";
import { IComic, IGetAllComics } from "./Comic.api.service.interfaces";

const { REACT_APP_API_BASE } = process.env;
const _apiBase = REACT_APP_API_BASE;

export const getAllComics = async (offset: number): Promise<IGetAllComics> => {
  const data = await axios.get(`${_apiBase}comic?limit=9&offset=${offset}`);
  return data.data;
};

export const getComic = async (id: string): Promise<IComic> => {
  const data = await axios.get(`${_apiBase}comic/${id}`);
  return data.data;
};
