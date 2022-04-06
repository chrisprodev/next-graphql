import React from "react";
import { ADD_BOOK } from "../graphql/books/mutation";
import { gql, useMutation } from "@apollo/client";

const BookForm = () => {
  const [createBook, newBook] = useMutation(ADD_BOOK);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      event.preventDefault();
      await createBook({
        variables: { title: event.currentTarget.book_title.value },
        // update(cache, { data: { newBook } }) {
        //   cache.modify({
        //     fields: {
        //       books(existingBooks = []) {
        //         const newBookRef = cache.writeFragment({
        //           data: newBook,
        //           fragment: gql`
        //             fragment NewBook on Book {
        //               id
        //               title
        //             }
        //           `,
        //         });
        //         return [...existingBooks, newBookRef];
        //       },
        //     },
        //   });
        // },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (newBook.loading) return <p>Submitting...</p>;
  if (newBook.error)
    return <p>{`Submission error! ${newBook.error.message}`}</p>;

  return (
    <div>
      <h5>Add a new book</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book_title">Book title</label>
        <input id="book_title" type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookForm;
