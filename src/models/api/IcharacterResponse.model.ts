interface IThumbnail {
  path: string;
  extension: string;
}

interface IUrls {
  type: string;
  url: string;
}

interface IComicItem {
  resourceURI: string;
  name: string;
}

interface IComics {
  available: number;
  collectionURI: string;
  items: Array<IComicItem>;
  returned: string;
}

export interface ICharacterResponse {
  name: string;
  thumbnail: IThumbnail;
  urls: Array<IUrls>;
  comics: IComics;
  id: number;
  description: string;
}

export interface ICharacter {
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: Array<IComicItem>;
  id: number;
}
