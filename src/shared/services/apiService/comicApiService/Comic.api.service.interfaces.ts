export interface IComic {
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  pageCount: number;
  _id: string;
}

export interface IGetAllComics {
  total: number;
  offset: number;
  limit: number;
  results: IComic[];
}
