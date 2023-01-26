import axiosClient from "../axiosInstance";
import { ICharacter, IGetAllCharacters } from "./character.api.service.types";

export const getAllCharacters = async (
  offset: number,
): Promise<IGetAllCharacters> => {
  return axiosClient
    .get<IGetAllCharacters>(`character?limit=9&offset=${offset}`)
    .then((res) => res.data);
};

export const getCharacter = async (id: string): Promise<ICharacter> => {
  return axiosClient.get(`character/${id}`).then((res) => res.data);
};

export const getRandomCharacter = async (): Promise<ICharacter> => {
  return axiosClient.get(`character/random`).then((res) => res.data);
};
