import axiosClient from "../axiosInstance";
import { IComic, IGetAllComics } from "./comic.api.service.types";

export const getAllComics = async (offset: number): Promise<IGetAllComics> => {
  return axiosClient
    .get(`comic?limit=9&offset=${offset}`)
    .then((res) => res.data);
};

export const getComic = async (id: string): Promise<IComic> => {
  return axiosClient.get(`comic/${id}`).then((res) => res.data);
};
