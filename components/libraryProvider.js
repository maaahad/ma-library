// react
import React, { useState, createContext, useContext } from "react";

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
  readStatus = false
) {
  // deal with cover image later
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.likes = 0;
  this.comments = [];
  this.id = v4();
  this.readStatus = readStatus;
}

// old way : requirement for this project
Book.prototype = {
  toggleReadStatus() {
    this.readStatus = !this.readStatus;
  },
  incrementLikes() {
    this.likes++;
  },
};

export default function LibraryProvider({ children }) {
  const [library, setLibrary] = useState([
    new Book("JS the Definitive Guide", "David Flanagan", 687, true),
    new Book("Web Development with Node & Express", "Ethan Brown", 322, true),
  ]);

  const clearLibrary = () => {
    setLibrary([]);
  };

  const addBookToLibrary = ({ title, author, pages }) => {
    const newBook = new Book(title, author, pages);
    // need to optimize this
    const newLibrary = [...library, newBook];
    setLibrary(newLibrary);
  };

  const removeBookFromLibrary = (id) => {
    const newLibrary = library.filter((book) => book.id !== id);
    setLibrary(newLibrary);
  };

  const toggleBookReadStatus = (id) => {
    const newLibrary = library.map((book) => {
      book.id === id && book.toggleReadStatus();
      return book;
    });
    setLibrary(newLibrary);
  };

  const updateBookLikes = (id) => {
    const newLibrary = library.map((book) => {
      book.id === id && book.incrementLikes();
      return book;
    });
    setLibrary(newLibrary);
  };

  //  useEffect to retrive books from localStorage, otherwise
  // first implement add book to library

  return (
    <LibraryContext.Provider
      value={{
        library,
        addBookToLibrary,
        clearLibrary,
        removeBookFromLibrary,
        toggleBookReadStatus,
        updateBookLikes,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export { useLibrary };
