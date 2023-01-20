interface IComicItem {
  resourceURI: string;
  name: string;
}

export interface ICharacter {
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: IComicItem[];
  _id: string;
}

export interface IGetAllCharacters {
  total: number;
  offset: number;
  limit: number;
  results: ICharacter[];
}
