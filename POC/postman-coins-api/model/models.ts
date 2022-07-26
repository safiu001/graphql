export type FiatModel = {
    name: string;
    rate: number;
    symbol: string
    imageUrl: string
}

export type CoinModel = {
    id: string
    icon: string
    name: string
    symbol: string
    rank: number
    price: number
}

export type MarketModel = {
    price: number,
    exchange: string,
    pair: string,
    volume: number,
    link: string
}

export type TickersModel = {
    from: string,
    to: string,
    exchange: string,
    price: number
}

export type NewsModel = {
    id: string,
    feedDate: string,
    source: string,
    title: string,
    isFeatured: boolean,
    description: string,
    imgURL: string,
}