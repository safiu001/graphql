const {ApolloServer, gql} = require("apollo-server")

const typeDefs = gql`
    type Query{
        hello: String
        products: [Product!]!
        product (id: ID!): Product
    }

    type Product{
        id: Int
        name: String
        cost: Int
        productList: [Product!]!
    }
`

const products = [
    {
        id: "1",
        name: "mobile",
        cost: 1000
    },
    {
        id: "2",
        name: "tv",
        cost: 1500
    }
]

const resolvers = {
    Query: {
        hello: ()=>"World",
        products: ()=>products,
        product: (parent, args, context)=>{
            const productId = args.id;
            return products.find((prod)=>prod.id === productId)
        }
    },

    Product: {
        productList: (parent, args, context)=>{
            return products.filter((prod)=>parent.id !== prod.id)
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=>{
    console.log(url)
})