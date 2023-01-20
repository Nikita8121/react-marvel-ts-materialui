import axios from "axios";
import {
  ICharacter,
  IGetAllCharacters,
} from "./Character.api.service.interfaces";

const { REACT_APP_API_BASE } = process.env;
const _apiBase = REACT_APP_API_BASE;

export const getAllCharacters = async (
  offset: number,
): Promise<IGetAllCharacters> => {
  const data = await axios.get<IGetAllCharacters>(
    `${_apiBase}character?limit=9&offset=${offset}`,
  );
  return data.data;
};

export const getCharacter = async (id: string): Promise<ICharacter> => {
  const data = await axios.get(`${_apiBase}character/${id}`);
  return data.data;
};

export const getRandomCharacter = async (): Promise<ICharacter> => {
  const data = await axios.get(`${_apiBase}character/random`);
  return data.data;
};
