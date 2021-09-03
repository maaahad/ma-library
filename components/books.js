// react
// next
// components
import FilterNSort from "./filterNsort";
import BookCard from "./bookCard";

// in-house library
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/books.module.sass";

export default function Books() {
  const { library } = useLibrary();
  return (
    <div className={Styles.container}>
      <div className={Styles.filterNsort}>
        <FilterNSort />
      </div>
      <div className={Styles.books}>
        {library.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </div>
  );
}
