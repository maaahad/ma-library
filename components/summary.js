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
  const totalBooks = library.books.length;
  let booksRead = 0;
  library.books.forEach((book) => {
    book.readStatus && booksRead++;
  });
  const booksNotRead = totalBooks - booksRead;
  const readPercentage = (booksRead * 100) / totalBooks;
  const notReadPercentage = (booksNotRead * 100) / totalBooks;

  return [
    totalBooks,
    booksRead,
    booksNotRead,
    readPercentage,
    notReadPercentage,
  ];
};

export default function Summary() {
  const [
    totalBooks,
    booksRead,
    booksNotRead,
    readPercentage,
    notReadPercentage,
  ] = useLibrarySummary();
  const statusBarContainerRef = useRef();

  const styleStatusBar = (element, bgColor, widthPercentage) => {
    element.style.display = "flex";
    element.style.height = "100%";
    element.style.width = `${widthPercentage}%`;
    element.style.backgroundColor = bgColor;
  };

  useEffect(() => {
    const statusBarContainer = statusBarContainerRef.current;
    // read
    if (booksRead) {
      styleStatusBar(statusBarContainer.children[0], "#48e98a", readPercentage);
    } else {
      statusBarContainer.children[0].style.display = "none";
    }
    // not read
    if (booksNotRead) {
      styleStatusBar(
        statusBarContainer.children[1],
        "#fe4551",
        notReadPercentage
      );
    } else {
      statusBarContainer.children[1].style.display = "none";
    }
  });

  return (
    <div className={Styles.summaryContainer}>
      <div className={Styles.barExplanation}>
        <div className={Styles.readBlock}>
          <p>Read</p>
          <div></div>
        </div>
        <div className={Styles.totalBlock}>
          <p>Total Books</p>
          <div>
            <span>{totalBooks}</span>
          </div>
        </div>
        <div className={Styles.notReadBlock}>
          <p>Not Read</p>
          <div></div>
        </div>
      </div>
      <div ref={statusBarContainerRef} className={Styles.statusBarContainer}>
        <div title={booksRead}>{booksRead}</div>
        <div title={booksNotRead}>{booksNotRead}</div>
      </div>
    </div>
  );
}
