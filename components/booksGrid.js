// react
// next
// components
import FilterNSort from "./filterNsort";
import BookCard from "./bookCard";

// in-house library
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/booksGrid.module.sass";

export default function BooksGrid() {
  const { library } = useLibrary();
  return (
    <div className={Styles.books}>
      {library.books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </div>
  );
}
