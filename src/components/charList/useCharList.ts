import { useCharactersQuery } from "../../shared/hooks/Character.api.hook";
import { ICharacter } from "../../shared/services/apiService/characterApiService/character.api.service.types";
import transformApiResponse from "../../shared/utils/ApiUtils";

interface IUseCharList {
  characters: ICharacter[] | undefined;
  loadingNewChars: boolean;
  loading: boolean;
  fetchChars: () => void;
  hasMoreCharacters: boolean | undefined;
}

const useCharList = (): IUseCharList => {
  const { data, fetchNextPage, isFetchingNextPage, isFetching, hasNextPage } =
    useCharactersQuery(0);

  return {
    characters: transformApiResponse(data?.pages) as ICharacter[] | undefined,
    loadingNewChars: isFetchingNextPage,
    loading: isFetching,
    fetchChars: fetchNextPage,
    hasMoreCharacters: hasNextPage,
  };
};

export default useCharList;
