// react
import React, { useReducer, useEffect } from "react";

// next
import Head from "next/head";

// react-icons
import { BiCodeAlt, BiInfoCircle } from "react-icons/bi";

// components
import MainTop from "../components/mainTop";
import BooksGrid from "../components/booksGrid";
import BooksTable from "../components/booksTable";
import FilterNSort from "../components/filterNsort";

// sass styls
import Styles from "../styles/index.module.sass";

export default function Home() {
  // this will control the View toggler
  const [gridView, toggleView] = useReducer((gridView) => !gridView, true);

  // this effect is responsible to moved to gridView when the screen size is
  // less than md in case tableView is active
  useEffect(() => {
    // we only need tableview when viewport width is less than 960px (md)
    const moveToGridView = () => {
      window.innerWidth < 960 && !gridView && toggleView();
    };
    window.addEventListener("resize", moveToGridView);
    return () => window.removeEventListener("resize", moveToGridView);
  }, [gridView]);

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

      {/* TODO: need to think about mainLeft */}
      {/* <div className={Styles.mainLeft}>
        This will be used as book add form in window-width: md
      </div> */}

      <div className={Styles.mainRight}>
        <div className={Styles.mainTop}>
          <MainTop toggleView={toggleView} gridView={gridView} />
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
          <div className={Styles.filterNsort}>
            <FilterNSort />
          </div>
          {gridView ? <BooksGrid /> : <BooksTable />}
        </div>
      </div>
    </div>
  );
}
