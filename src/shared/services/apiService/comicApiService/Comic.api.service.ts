import axiosClient from "../axiosInstance";
import { IComic, IGetAllComics } from "./Comic.api.service.types";

export const getAllComics = async (offset: number): Promise<IGetAllComics> => {
  const data = await axiosClient.get(`comic?limit=9&offset=${offset}`);
  return data.data;
};

export const getComic = async (id: string): Promise<IComic> => {
  const data = await axiosClient.get(`comic/${id}`);
  return data.data;
};
