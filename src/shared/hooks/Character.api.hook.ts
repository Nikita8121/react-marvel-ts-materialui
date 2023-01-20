import { useInfiniteQuery, useQuery } from "react-query";
import {
  getAllCharacters,
  getCharacter,
  getRandomCharacter,
} from "../services/apiService/characterApiService/Character.api.service";
import {} from "../services/apiService/comicApiService/Comic.api.service";

const useCharacters = (offset: number) => {
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

const useCharacter = (id: string) =>
  useQuery({
    queryKey: ["characters", id],
    queryFn: async () => getCharacter(id),
  });

const useRandomCharacter = () =>
  useQuery({
    queryKey: ["randomCharacter"],
    queryFn: async () => getRandomCharacter(),
  });

export { useCharacters, useCharacter, useRandomCharacter };
