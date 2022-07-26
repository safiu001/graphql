import { GraphQLScalarType, Kind } from "graphql";

const urlScalar = new GraphQLScalarType({
    name: 'Url',
    description: 'Url custom scalar type',
    serialize(value: any) {
      return value.toString(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return value; // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
});