// react
import React, { useState, createContext, useContext, useEffect } from "react";

const LibraryContext = createContext();
const useLibrary = () => useContext(LibraryContext);
import { Book, Library, getLibraryFromLocalStorage } from "../lib/library";

export default function LibraryProvider({ children }) {
  const [library, setLibrary] = useState(getLibraryFromLocalStorage());

  const updateStateAndStorage = (newLibrary) => {
    localStorage.setItem("maLibrary", JSON.stringify(newLibrary));
    setLibrary(newLibrary);
  };

  const clearLibrary = () => {
    updateStateAndStorage([]);
  };

  const addBookToLibrary = ({ title, author, pages, readStatus }) => {
    const newBook = new Book(title, author, pages, readStatus);
    // TODO: need to optimize this
    const newLibrary = [...library, newBook];
    updateStateAndStorage(newLibrary);
  };

  const removeBookFromLibrary = (id) => {
    const newLibrary = library.filter((book) => book.id !== id);
    updateStateAndStorage(newLibrary);
  };

  const editBookToLibrary = (newBook) => {
    const newLibrary = library.map((book) =>
      book.id === newBook.id ? book.edit(newBook) : book
    );
    updateStateAndStorage(newLibrary);
  };

  const toggleBookReadStatus = (id) => {
    const newLibrary = library.map((book) => {
      book.id === id && book.toggleReadStatus();
      return book;
    });
    updateStateAndStorage(newLibrary);
  };

  const updateBookLikes = (id) => {
    const newLibrary = library.map((book) => {
      book.id === id && book.incrementLikes();
      return book;
    });
    updateStateAndStorage(newLibrary);
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
