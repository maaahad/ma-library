// react
import React, { useReducer } from "react";
// next
import Image from "next/image";
// react icons
import { BiEdit, BiLike, BiMessageRounded, BiTrash } from "react-icons/bi";

// components
import ToggleSwitch from "./utilities/toggleswitch";
import BookForm from "./bookForm";
import ConfirmationMessage from "./utilities/confirmationMessage";

// library
import { useLibrary } from "./libraryProvider";
import { useModal } from "../lib/hooks";

// sass styles
import Styles from "../styles/bookCard.module.sass";

function CardHeader({ book }) {
  const { toggleBookReadStatus, editBookToLibrary } = useLibrary();
  const [renderForm, renderModal, hideModal] = useModal();

  const toggleStatus = () => {
    toggleBookReadStatus(book.id);
  };

  const onBookFormSubmit = ({ title, author, pages, readStatus }) => {
    hideModal();
    // TODO: dno't do anything in case book has not been changed
    editBookToLibrary({ ...book, title, author, pages, readStatus });
  };

  return (
    <div className={Styles.cardHeader}>
      <div className={Styles.cardMeta}>
        <h4>{book.title} </h4>
        <h6>Author: {book.author}</h6>
        <h6>Pages : {book.pages}</h6>
      </div>
      <div className={Styles.cardEdit}>
        <ToggleSwitch
          checked={book.readStatus}
          id={book.id}
          checkedText="Read"
          uncheckedText="Not Read"
          toggleStatus={toggleStatus}
        />
        <button type="button" className={Styles.edit} onClick={renderModal}>
          <span>Edit</span>
          <BiEdit />
        </button>
      </div>

      {/* add book modal */}
      {renderForm && (
        <div className={Styles.editBookModal}>
          <BookForm
            formHeader="Edit Book to Library"
            submitText="Edit"
            onBookFormSubmit={onBookFormSubmit}
            hideModal={hideModal}
            bookState={{ ...book }}
          />
        </div>
      )}
    </div>
  );
}

function CardActions({ book }) {
  const { removeBookFromLibrary, updateBookLikes } = useLibrary();
  const [renderConfirmMessage, renderModal, hideModal] = useModal();

  const confirmRemoveBook = () => {
    hideModal();
    removeBookFromLibrary(book.id);
  };
  const removeBook = () => {
    renderModal();
  };

  const likeBook = () => {
    updateBookLikes(book.id);
  };

  return (
    <div className={Styles.cardActions}>
      <div className={Styles.likesComments}>
        <div className={Styles.likes}>
          <button onClick={likeBook}>
            <BiLike />
          </button>
          <span>{book.likes}</span>
        </div>
        <div className={Styles.comments}>
          <button>
            <BiMessageRounded />
          </button>
          <span>{book.comments.length}</span>
        </div>
      </div>
      <button className={Styles.removeMe} onClick={removeBook}>
        <span>Delete</span>
        <BiTrash />
      </button>

      {/* confirm message on deletion */}
      {renderConfirmMessage && (
        <div className={Styles.deletionConfirmationModal}>
          {/* container is responsible to specify the size and background colror of confirmation message */}
          <ConfirmationMessage
            confirmationText="Are you really want to delete this book?"
            confirmButtonText="Yes"
            cancelButtonText="No"
            onConfirmButtonClick={confirmRemoveBook}
            onCancelButtonClick={hideModal}
          />
        </div>
      )}
    </div>
  );
}

export default function BookCard({ book }) {
  // console.log("Book", book);
  return (
    <div className={Styles.bookContainer}>
      {/* <ToggleSwitch /> */}
      <CardHeader book={book} />
      <div className={Styles.cardMedia}>
        <Image src="/nocoverb.png" layout="fill" objectFit="fill" />
      </div>
      <CardActions book={book} />
    </div>
  );
}
