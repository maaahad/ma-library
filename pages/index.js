// react
import React, { useState, useReducer } from "react";

// next
import Head from "next/head";

// react-icons
import { BiCodeAlt, BiInfoCircle } from "react-icons/bi";

// components
import MainTop from "../components/mainTop";
import Books from "../components/books";

// sass styls
import Styles from "../styles/home.module.sass";

export default function Home() {
  // this will control the View toggler
  const [gridView, toggleView] = useReducer((gridView) => !gridView, false);
  return (
    <div className={Styles.container}>
      <Head>
        <title>MA-Library</title>
        <meta
          name="description"
          content="Library project developed for The Odin Project's Full Stack JavaScript Course"
        />
      </Head>
      {/* the following will be part of main */}
      <div className={Styles.mainTop}>
        <MainTop toggleView={toggleView} />
      </div>
      {/* source and info */}
      <div className={Styles.sourceNinfo}>
        {/* the following two div will be replace by Link from NextJS */}
        <div className={Styles.info}>
          <BiInfoCircle />
        </div>
        <div className={Styles.code}>
          <BiCodeAlt />
        </div>
      </div>
      {/* books list */}
      <div className={Styles.books}>
        <Books />
      </div>
    </div>
  );
}
