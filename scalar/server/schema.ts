const { gql } =  require("apollo-server")

export const typeDefs=gql`
    type Query {
        movies: [Movie!]!
        movie (id: ID!): Movie
    }

    type Movie{
        id: String
        name: String!
        rating: String!
        category: String!
    }

    type Mutation{
        addMovie(input: AddMovie!): Movie!
    }

    input AddMovie{
        name: String!,
        rating: String,
        category: String
    }
`