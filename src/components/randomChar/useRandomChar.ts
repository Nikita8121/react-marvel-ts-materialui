import { useRandomCharacter } from "../../shared/hooks/Character.api.hook";
import { ICharacter } from "../../shared/services/apiService/characterApiService/Character.api.service.types";

interface IUseRandomChar {
  character: ICharacter | undefined;
  updateCharacter: () => void;
  loading: boolean;
}

const useRandomChar = (): IUseRandomChar => {
  const { data, isLoading, refetch } = useRandomCharacter();

  return { character: data, updateCharacter: refetch, loading: isLoading };
};

export default useRandomChar;
