import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Book {
    id: String
    title: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String): Book
  }
`;
