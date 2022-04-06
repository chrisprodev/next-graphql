import type { NextPage } from "next";
import Head from "next/head";
import BookForm from "../components/BookForm";
import Books from "../components/Books";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BookForm />

      <Books />
    </>
  );
};

export default Home;
