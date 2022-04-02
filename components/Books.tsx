import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/books/query";
import { Book, BooksData } from "../graphql/books/typeDef";

const Books = () => {
  const { loading, error, data } = useQuery<BooksData, Book>(
    GET_BOOKS
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <>
      {data &&
        data.books.map((book) => (
          <h4 key={book.id}>{book.title}</h4>
        ))}
    </>
  );
};

export default Books;
