// react

// in-house hooks
import { useLibrary } from "./libraryProvider";

// components
import BookRow from "./bookRow";

// sass styles
import Styles from "../styles/booksTable.module.sass";

export default function BooksTable() {
  const { library } = useLibrary();
  return (
    <table className={Styles.booksTable}>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Pages</th>
          <th scope="col">Read Status</th>
          {/* <th scope="col">Likes</th>
          <th scope="col">Coments</th> */}
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {library.books.map((book, index) => (
          <BookRow key={index} book={book} />
        ))}
      </tbody>
    </table>
  );
}
