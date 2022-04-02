import type { NextPage } from "next";
import Head from "next/head";
import Books from "../components/Books";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Books />
    </>
  );
};

export default Home;
