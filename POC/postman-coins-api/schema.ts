import { gql } from "apollo-server";

export const typeDefs = gql`
    type Fiat{
        name: String!
        rate: Float!
        symbol: String!
        imageUrl: String!
    },
    type Coin{
        id: String!
        icon: String!
        name: String!
        symbol: String!
        rank: Int!
        price: Float!
    },
    type Chart{
        chart: [[Float!]!]!
    },
    type Exchange{
        supportedExchanges: [String!]!
    },
    type Market{
        price: Float,
        exchange: String,
        pair: String,
        volume: Float,
        link: String
    },
    type Tickers{
        from: String!,
        to: String!,
        exchange: String,
        price: Float!
    },
    type News{
        id: String!,
        source: String!,
        title: String!,
        feedDate: String!,
        isFeatured: Boolean!,
        description: String!,
        imgURL: String!,
    },
    type Query{
        fiats: [Fiat!]!
        coins(skip: Int, limit: Int, currency: String): [Coin!]!
        coin(id: ID!, currency: String): Coin
        chart(period: String, coinId: ID!): Chart
        exchanges: Exchange
        markets(coinId: ID!): [Market!]!
        tickers(exchange: String, pair:String!): [Tickers!]!
        news(skip: Int, limit: Int, toDate: String, fromDate: String): [News!]!
    },
`