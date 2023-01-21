import { useInfiniteQuery, useQuery } from "react-query";
import {
  getAllCharacters,
  getCharacter,
  getRandomCharacter,
} from "../services/apiService/characterApiService/character.api.service";
import {} from "../services/apiService/comicApiService/comic.api.service";

const useCharactersQuery = (offset: number) => {
  return useInfiniteQuery({
    queryKey: ["characters", offset],
    queryFn: async ({ pageParam = offset }) => {
      const data = await getAllCharacters(pageParam);
      return data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.offset < lastPage.total) {
        return lastPage.offset + 9;
      }
      return false;
    },
  });
};

const useCharacterQuery = (id: string) =>
  useQuery({
    queryKey: ["characters", id],
    queryFn: async () => getCharacter(id),
  });

const useRandomCharacterQuery = () =>
  useQuery({
    queryKey: ["randomCharacter"],
    queryFn: async () => getRandomCharacter(),
  });

export { useCharactersQuery, useCharacterQuery, useRandomCharacterQuery };
