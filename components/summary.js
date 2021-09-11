// react
import React, { useRef, useEffect, useLayoutEffect } from "react";
// nextjs

// in-house hooks
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/summary.module.sass";

// a custom hook for library summary
const useLibrarySummary = () => {
  const { library } = useLibrary();
  const totalBooks = library.length;
  let booksRead = 0;
  library.forEach((book) => {
    book.readStatus && booksRead++;
  });
  const booksNotRead = totalBooks - booksRead;

  return [totalBooks, booksRead, booksNotRead];
};

export default function Summary() {
  const [totalBooks, booksRead, booksNotRead] = useLibrarySummary();
  const statusBarContainerRef = useRef();

  useEffect(() => {
    const statusBarContainer = statusBarContainerRef.current;
    if (booksRead) {
      statusBarContainer.children[0].style.display = "flex";
      statusBarContainer.children[0].style.height = "100%";
      statusBarContainer.children[0].style.width = `${
        (booksRead * 100) / totalBooks
      }%`;
      statusBarContainer.children[0].style.backgroundColor = "#48e98a";
    } else {
      statusBarContainer.children[0].style.display = "none";
    }

    if (booksNotRead) {
      statusBarContainer.children[1].style.display = "flex";
      statusBarContainer.children[1].style.height = "100%";
      statusBarContainer.children[1].style.width = `${
        (booksNotRead * 100) / totalBooks
      }%`;
      statusBarContainer.children[1].style.backgroundColor = "#fe4551";
    } else {
      statusBarContainer.children[1].style.display = "none";
    }
  });

  return (
    <div className={Styles.summaryContainer}>
      <div className={Styles.barExplanation}>
        <div className={Styles.readBlock}>
          <p>Read</p>
          <div>{/* <span>{booksRead}</span> */}</div>
        </div>
        <div className={Styles.totalBlock}>
          <p>Total Books</p>
          <div>
            <span>{totalBooks}</span>
          </div>
        </div>
        <div className={Styles.notReadBlock}>
          <p>Not Read</p>
          <div>{/* <span>{booksNotRead}</span> */}</div>
        </div>
      </div>
      <div ref={statusBarContainerRef} className={Styles.statusBarContainer}>
        <div title={booksRead}>{booksRead}</div>
        <div title={booksNotRead}>{booksNotRead}</div>
      </div>
    </div>
  );
}
