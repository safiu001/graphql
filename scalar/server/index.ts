import { typeDefs }  from "./schema"
import { db } from "./db"
import { Query } from "./resolvers/Query"
import { Mutations } from "./resolvers/Mutations"

const { ApolloServer } = require("apollo-server")

const resolvers = {
    Query: Query,
    Mutation: Mutations
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db
    }
})

server.listen().then((response: Response) => console.log("Server at "+ response.url))