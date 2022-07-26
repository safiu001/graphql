import { RESTDataSource } from 'apollo-datasource-rest';
import { coinInputType, newsInputType } from '../model/input_type';
import { CoinModel, FiatModel, MarketModel, NewsModel, TickersModel } from '../model/models';

class CryptAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = "https://api.coinstats.app/public/v1/"
    }

    async getAllFiats() {
        const response = await this.get("fiats")
        return Array.isArray(response) ? response.map(fiat => this.fiatReducer(fiat)): []
    }

    async getAllCoins({skip, limit, currency}: coinInputType) {
        const response = await this.get("coins", {skip, limit, currency})
        return Array.isArray(response.coins) ? response.coins.map((coin: CoinModel) => this.coinReducer(coin)): []
    }

    async getCoinById({id, currency}: {id:string, currency:string}) {
        const response = await this.get(`coins/${id}`, {currency})
        return Promise.resolve(this.coinReducer(response.coin))
    }

    async getChart({period, coinId}: {period: string, coinId: string}) {
        const response = await this.get("charts", {period, coinId})
        return Promise.resolve({chart: response.chart})
    }

    async getAllExchanges() {
        const response = await this.get("exchanges")
        return Promise.resolve(response)
    }

    async getMarket({coinId}:{coinId:string}) {
        const response = await this.get("markets", {coinId})
        return Array.isArray(response)? response.map(exchange=>this.marketReducer(exchange)):[]
    }

    async getTickers({exchange, pair}: {exchange: string, pair: string}) {
        const response = await this.get("tickers", {exchange, pair})
        return Array.isArray(response.tickers)? response.tickers.map((exchange:TickersModel)=>exchange):[]
    }

    async getNews(params: newsInputType) {
        const response = await this.get("news", params)
        return Array.isArray(response.news)? response.news.map((newsItem:NewsModel)=>newsItem):[]
    }

    fiatReducer(fiat: FiatModel) {
        return {
            ...fiat
        }
    }

    coinReducer(coin: CoinModel) {
        return coin
    }

    marketReducer(exchange: MarketModel) {
        return exchange
    }
}

export default CryptAPI