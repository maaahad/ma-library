// unique id generator
import { v4 } from "uuid";

// create a prototype object with necessary method
// we are dealing with class this way to follow the
// requirement of this project by The Odin Project

const flashMessages = {
  updated: "Book updated successfully",
  added: "Book added successfully",
  deleted: "Book deleted successfully",
  cleared: "Library cleared successfully",
};

function Library(books = [], recentAction = "launched") {
  this.books = books;
  this.recentAction = recentAction;
}

Library.prototype = {
  getFlashMessage() {
    return flashMessages[this.recentAction];
  },
};

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
function getLibraryFromLocalStorage() {
  const library = JSON.parse(localStorage.getItem("maLibrary"));
  if (!library) return new Library();
  return new Library(
    library.books.map(
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
    )
  );
}

// update the local storage once library state is

export { Book, Library, getLibraryFromLocalStorage };
