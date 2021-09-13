// react
// nextjs
// react icons
import { BiEdit, BiTrash, BiLike, BiMessageRounded } from "react-icons/bi";

// custom hooks
import { useLibrary } from "./libraryProvider";
import { useModal } from "../lib/hooks";

// components
import ToggleSwitch from "./utilities/toggleswitch";
import BookForm from "./bookForm";
import ConfirmationMessage from "./utilities/confirmationMessage";

// sass style
import Styles from "../styles/bookRow.module.sass";

export default function BookRow({ book }) {
  const {
    toggleBookReadStatus,
    updateBookLikes,
    editBookToLibrary,
    removeBookFromLibrary,
  } = useLibrary();
  const [renderEditForm, renderEditFormModal, hideEditFormModal] = useModal();
  const [
    renderConfirmMessage,
    renderConfirmMessageModal,
    hideConfirmMessageModal,
  ] = useModal();

  // The following may be abstracted away with a custom hook.
  // we are using it in multiple places
  const onToggleBookReadStatus = () => {
    toggleBookReadStatus(book.id);
  };

  const onEditFormSubmit = ({ title, author, pages, readStatus }) => {
    hideEditFormModal();
    // TODO: dno't do anything in case book has not been changed
    editBookToLibrary({ ...book, title, author, pages, readStatus });
  };

  const onConfirmRemove = () => {
    hideConfirmMessageModal();
    removeBookFromLibrary(book.id);
  };
  const onRemove = () => {
    renderConfirmMessageModal();
  };

  // const onLike = () => {
  //   updateBookLikes(book.id);
  // };

  return (
    <>
      <tr className={Styles.bookRow}>
        <th scope="row" className={Styles.title}>
          {book.title}
        </th>
        <td className={Styles.author}>{book.author}</td>
        <td className={Styles.pages}>{book.pages}</td>
        <td className={Styles.readStatus}>
          <ToggleSwitch
            checked={book.readStatus}
            id={book.id}
            checkedText="Read"
            uncheckedText="Not Read"
            toggleStatus={onToggleBookReadStatus}
          />
        </td>
        {/* <td className={Styles.likes}>
          <button type="button" onClick={onLike}>
            <BiLike />
            <span>{book.likes}</span>
          </button>
        </td> */}
        {/* <td className={Styles.messages}>
          <button>
            <BiMessageRounded />
            <span>{book.comments.length}</span>
          </button>
        </td> */}
        <td className={Styles.edit}>
          <button type="button" onClick={renderEditFormModal}>
            <BiEdit />
          </button>
        </td>
        <td className={Styles.delete}>
          <button type="button" onClick={onRemove}>
            <BiTrash />
          </button>
        </td>
      </tr>

      {/* Sort this later div can't appear as a child of tbody */}
      {/* adding edit book form modal */}
      {renderEditForm && (
        <div className={Styles.editBookModal}>
          <BookForm
            formHeader="Edit Book to Library"
            submitText="Edit"
            onBookFormSubmit={onEditFormSubmit}
            hideModal={hideEditFormModal}
            bookState={{ ...book }}
          />
        </div>
      )}

      {/* confirm message on deletion */}
      {renderConfirmMessage && (
        <div className={Styles.deletionConfirmationModal}>
          {/* container is responsible to specify the size and background colror of confirmation message */}
          <ConfirmationMessage
            confirmationText="Are you really want to delete this book?"
            confirmButtonText="Yes"
            cancelButtonText="No"
            onConfirmButtonClick={onConfirmRemove}
            onCancelButtonClick={hideConfirmMessageModal}
          />
        </div>
      )}
    </>
  );
}
