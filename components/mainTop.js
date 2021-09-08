// react
import React, { useState, useReducer } from "react";
// next

// react-icons
import { BiTrash, BiBookAdd } from "react-icons/bi";

// libs
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/mainTop.module.sass";

// components
import BookForm from "./bookForm";
import ConfirmationMessage from "./utilities/confirmationMessage";

// in-house hooks
import { useModal } from "../lib/hooks";

export default function MainTop() {
  const { library, clearLibrary, addBookToLibrary } = useLibrary();
  const [renderForm, renderModal, hideModal] = useModal();
  const [
    renderConfirmMessage,
    renderConfirmMessageModal,
    hideConfirmMessageModal,
  ] = useModal();

  const onConfirmClearLibrary = () => {
    hideConfirmMessageModal();
    clearLibrary();
  };
  const onClearLibrary = () => {
    // display this only there is book available
    if (library.length) renderConfirmMessageModal();
  };

  const onBookFormSubmit = ({ title, author, pages, readStatus }) => {
    hideModal();
    addBookToLibrary({ title, author, pages, readStatus });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.summary}>
        {/* TODO: we need to add a meter form input here to show read books signal */}
        <p>Total Books : {library.length}</p>
        <p>Number of Books read (TODO : use library): 40</p>
        <p>Number of Books to be read (TODO : use library): 960</p>
      </div>
      <div className={Styles.interaction}>
        <button className={Styles.clearStore} onClick={onClearLibrary}>
          <BiTrash />
          <span>Clear Library</span>
        </button>
        {/* add display option Grid or Table using toggleSwitch */}
        <button className={Styles.addBook} onClick={renderModal}>
          <BiBookAdd />
          <span>Add Book</span>
        </button>
        {/* confirm message on deletion */}
        {renderConfirmMessage && (
          <div className={Styles.deletionConfirmationModal}>
            {/* container is responsible to specify the size and background colror of confirmation message */}
            <ConfirmationMessage
              confirmationText="Are you really want to clear MA-Library?"
              confirmButtonText="Yes"
              cancelButtonText="No"
              onConfirmButtonClick={onConfirmClearLibrary}
              onCancelButtonClick={hideConfirmMessageModal}
            />
          </div>
        )}
      </div>

      {/* add book modal */}
      {renderForm && (
        <div className={Styles.addBookModal}>
          <BookForm
            formHeader="Add Book to Library"
            submitText="Add"
            onBookFormSubmit={onBookFormSubmit}
            hideModal={hideModal}
          />
        </div>
      )}
    </div>
  );
}
