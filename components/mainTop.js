// react
import React, { useState, useReducer } from "react";
// next

// react-icons
import { BiTrash, BiBookAdd } from "react-icons/bi";

// libs
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/mainTop.module.sass";

export default function MainTop() {
  const { library, clearLibrary, addBookToLibrary } = useLibrary();

  // trying modal
  const [displayAddBook, toggleDisplayAddBook] = useReducer(
    (displayAddBook) => !displayAddBook,
    false
  );

  const disableWindowScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // window.scrollTo({
    //   left: 0,
    //   top: 0,
    //   behavior: "smooth",
    // });
  };
  const enableWindowScroll = () => {};

  const displayAddBookModal = () => {
    toggleDisplayAddBook();
    window.onscroll = disableWindowScroll;
  };

  const hideAddBookModal = () => {
    // window.removeEventListener("scroll", disableWindowScroll);
    window.onscroll = enableWindowScroll;
    toggleDisplayAddBook();
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.summary}>
        <p>Total Books : 1000</p>
        <p>Number of Books read : 40</p>
        <p>Number of Books to be read : 960</p>
      </div>
      <div className={Styles.interaction}>
        <button
          className={Styles.clearStore}
          title="Clear Store"
          onClick={clearLibrary}
        >
          <BiTrash />
          <span>Clear Store</span>
        </button>
        <button
          className={Styles.addBook}
          title="Add Book"
          onClick={displayAddBookModal}
        >
          <BiBookAdd />
          <span>Add Book</span>
        </button>
      </div>

      {/* add book modal */}
      {displayAddBook && (
        <div className={Styles.addBookModal} onClick={hideAddBookModal}>
          <div></div>
        </div>
      )}
    </div>
  );
}
