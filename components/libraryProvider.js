// react
import React, { useState, createContext, useContext, useEffect } from "react";

// unique id generator
import { v4 } from "uuid";

const LibraryContext = createContext();
const useLibrary = () => useContext(LibraryContext);

// create a prototype object with necessary method
// we are dealing with class this way to follow the
// requirement of this project by The Odin Project

function Book(
  title = "Not Specified",
  author = "Not Known",
  pages = "Not Specified",
  readStatus = false,
  likes = 0,
  comments = [],
  id = v4()
) {
  // deal with cover image later
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.likes = likes;
  this.comments = comments;
  this.id = id;
}

// old way : requirement for this project
Book.prototype = {
  toggleReadStatus() {
    this.readStatus = !this.readStatus;
  },
  incrementLikes() {
    this.likes++;
  },
  edit({ title, author, pages, readStatus, likes, comments, id }) {
    return new Book(title, author, pages, readStatus, likes, comments, id);
  },
};

// get the library from localstorage
const getLibraryFromLocalStorage = () => {
  const library = JSON.parse(window.localStorage.getItem("maLibrary"));
  if (!library) return [];
  return library.map(
    (book) =>
      new Book(
        book.title,
        book.author,
        book.pages,
        book.readStatus,
        book.likes,
        book.comments,
        book.id
      )
  );
};

export default function LibraryProvider({ children }) {
  const [library, setLibrary] = useState(getLibraryFromLocalStorage());

  const clearLibrary = () => {
    // NOTE : repeated code
    window.localStorage.setItem("maLibrary", null);
    setLibrary([]);
  };

  const addBookToLibrary = ({ title, author, pages, readStatus }) => {
    const newBook = new Book(title, author, pages, readStatus);
    // TODO: need to optimize this
    const newLibrary = [...library, newBook];
    // we update the localStorage
    // NOTE : repeated code
    window.localStorage.setItem("maLibrary", JSON.stringify(newLibrary));
    // we update the state to re-render the component
    setLibrary(newLibrary);
  };

  const removeBookFromLibrary = (id) => {
    const newLibrary = library.filter((book) => book.id !== id);
    // we update the localStorage
    // NOTE : repeated code
    window.localStorage.setItem("maLibrary", JSON.stringify(newLibrary));
    // we update the state to re-render the component
    setLibrary(newLibrary);
  };

  const editBookToLibrary = (newBook) => {
    const newLibrary = library.map((book) =>
      book.id === newBook.id ? book.edit(newBook) : book
    );

    // NOTE : repeated code
    // we update the localStorage
    window.localStorage.setItem("maLibrary", JSON.stringify(newLibrary));
    // we update the state to re-render the component
    setLibrary(newLibrary);
  };

  const toggleBookReadStatus = (id) => {
    const newLibrary = library.map((book) => {
      book.id === id && book.toggleReadStatus();
      return book;
    });
    // NOTE : repeated code
    window.localStorage.setItem("maLibrary", JSON.stringify(newLibrary));
    setLibrary(newLibrary);
  };

  const updateBookLikes = (id) => {
    const newLibrary = library.map((book) => {
      book.id === id && book.incrementLikes();
      return book;
    });
    // NOTE : repeated code
    window.localStorage.setItem("maLibrary", JSON.stringify(newLibrary));
    setLibrary(newLibrary);
  };

  // useEffect to register handler to storage event on window
  // This effect will update other window tab
  // not the same window where the change to localStorage happened
  useEffect(() => {
    const updateLibrary = (event) => {
      setLibrary(getLibraryFromLocalStorage());
    };
    window.addEventListener("storage", updateLibrary);
    return () => window.removeEventListener("storage", updateLibrary);
  }, []);

  return (
    <LibraryContext.Provider
      value={{
        library,
        addBookToLibrary,
        clearLibrary,
        removeBookFromLibrary,
        editBookToLibrary,
        toggleBookReadStatus,
        updateBookLikes,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export { useLibrary };
