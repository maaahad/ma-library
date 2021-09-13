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
    updateStateAndStorage(new Library([], "cleared"));
  };

  const addBookToLibrary = ({ title, author, pages, readStatus }) => {
    const newBook = new Book(title, author, pages, readStatus);
    // TODO: need to optimize this
    const newLibrary = new Library([...library.books, newBook], "added");
    updateStateAndStorage(newLibrary);
  };

  const removeBookFromLibrary = (id) => {
    const newLibrary = new Library(
      library.books.filter((book) => book.id !== id),
      "deleted"
    );
    updateStateAndStorage(newLibrary);
  };

  const editBookToLibrary = (newBook) => {
    const newLibrary = new Library(
      library.books.map((book) =>
        book.id === newBook.id ? book.edit(newBook) : book
      ),
      "updated"
    );
    updateStateAndStorage(newLibrary);
  };

  const toggleBookReadStatus = (id) => {
    const newLibrary = new Library(
      library.books.map((book) => {
        book.id === id && book.toggleReadStatus();
        return book;
      }),
      "updated"
    );
    updateStateAndStorage(newLibrary);
  };

  const updateBookLikes = (id) => {
    const newLibrary = new Library(
      library.books.map((book) => {
        book.id === id && book.incrementLikes();
        return book;
      }),
      "updated"
    );
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
