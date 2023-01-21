import { useRandomCharacterQuery } from "../../shared/hooks/Character.api.hook";
import { ICharacter } from "../../shared/services/apiService/characterApiService/character.api.service.types";

interface IUseRandomChar {
  character: ICharacter | undefined;
  updateCharacter: () => void;
  loading: boolean;
}

const useRandomChar = (): IUseRandomChar => {
  const { data, isLoading, refetch } = useRandomCharacterQuery();

  return { character: data, updateCharacter: refetch, loading: isLoading };
};

export default useRandomChar;
