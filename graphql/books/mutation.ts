import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation createBook($title: String) {
    addBook(title: $title) {
      id
      title
    }
  }
`;
