interface IThumbnail {
    path : string,
    extension: string
}

interface IPrices {
    type: string,
    price: number
}

export interface IComicResponse {
    title: string,
    thumbnail : IThumbnail,
    prices: Array<IPrices>
    id: number,
    description: string,
    pageCount: number
}

export interface IComic {
    title: string,
    description: string,
    thumbnail : string,
    price: number | string,
    id: number,
    pageCount: number,
    language: string
}

