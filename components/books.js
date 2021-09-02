// react
// next
// components
import FilterNSort from "./filterNsort";
import BookCard from "./bookCard";

// sass styles
import Styles from "../styles/books.module.sass";

// temp array to test book  list
const createArray = (length) => [...new Array(length)];

export default function Books() {
  return (
    <div className={Styles.container}>
      <div className={Styles.filterNsort}>
        <FilterNSort />
      </div>
      <div className={Styles.books}>
        {createArray(10).map((book, index) => (
          <BookCard key={index} />
        ))}
      </div>
    </div>
  );
}
