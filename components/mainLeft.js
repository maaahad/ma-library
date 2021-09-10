// react
// nextjs
// react icons
// component
import BookForm from "./bookForm";
import { useModal } from "../lib/hooks";
import { useLibrary } from "./libraryProvider";
// sass style
import Styles from "../styles/mainLeft.module.sass";

export default function MainLeft() {
  const { addBookToLibrary } = useLibrary();
  const onBookFormSubmit = ({ title, author, pages, readStatus }) => {
    addBookToLibrary({ title, author, pages, readStatus });
  };
  return (
    <div className={Styles.mainLeftContent}>
      {/* we can add som other options in the top */}
      <div className={Styles.bookForm}>
        <BookForm
          formHeader="Add New Book to Library"
          submitText="Add"
          onBookFormSubmit={onBookFormSubmit}
          displayModalHideButton={false}
        />
      </div>
      {/* we can add som other options in the bottom */}
    </div>
  );
}
