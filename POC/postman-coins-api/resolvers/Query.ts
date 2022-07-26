import { coinInputType, newsInputType } from "../model/input_type"

export const Query = {
    fiats: (parent:any, args:any, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getAllFiats()
    },
    coins: (parent:any, {skip, limit, currency}: coinInputType, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getAllCoins({skip, limit, currency})
    },
    coin: (parent:any, {id, currency}: {id:string, currency:string}, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getCoinById({id, currency})
    },
    chart: (parent:any, {period, coinId}: {period: string, coinId: string}, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getChart({period, coinId})
    },
    exchanges: (parent:any, args:any, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getAllExchanges()
    },
    markets: (parent:any, {coinId}: {coinId:string}, { dataSources }: {dataSources:any})=>dataSources.cryptAPI.getMarket({coinId}),
    tickers: (parent:any, {exchange, pair}: {exchange:string, pair:string}, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getTickers({exchange, pair})
    },
    news: (parent:any, {skip, limit, toDate, fromDate}: newsInputType, { dataSources }: {dataSources:any})=>{
        return dataSources.cryptAPI.getNews({skip, limit, toDate, fromDate})
    }
}