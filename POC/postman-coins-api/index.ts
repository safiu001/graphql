import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import CryptAPI from "./data/crypt_api";
import { Query } from "./resolvers/Query";

const resolvers = {
    Query: Query
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: ()=>({ cryptAPI: new CryptAPI() })
})

server.listen().then((response)=>{
    console.log("Server is running on " + response.url)
})