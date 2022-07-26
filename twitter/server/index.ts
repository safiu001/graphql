import { ApolloServer } from "apollo-server"
import { db } from "./db"
import { typeDefs } from "./schema"
import { Query } from "./resolvers/Query"
import { Tweet } from "./resolvers/Tweet"
import { Mutation } from "./resolvers/Mutation"

const resolvers = {
    Query: Query,
    Tweet: Tweet,
    Mutation: Mutation
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db
    }
})

server.listen().then((response)=>{
    console.log("Server is listening on ", response.url)
})