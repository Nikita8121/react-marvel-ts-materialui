import axiosClient from "../axiosInstance";
import { ICharacter, IGetAllCharacters } from "./Character.api.service.types";

export const getAllCharacters = async (
  offset: number,
): Promise<IGetAllCharacters> => {
  const data = await axiosClient.get<IGetAllCharacters>(
    `character?limit=9&offset=${offset}`,
  );
  return data.data;
};

export const getCharacter = async (id: string): Promise<ICharacter> => {
  const data = await axiosClient.get(`character/${id}`);
  return data.data;
};

export const getRandomCharacter = async (): Promise<ICharacter> => {
  const data = await axiosClient.get(`character/random`);
  return data.data;
};
