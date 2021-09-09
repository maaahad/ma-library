// react
import React, { useState, useReducer } from "react";
// next

// react-icons
import { BiTrash, BiBookAdd, BiTable, BiGridAlt } from "react-icons/bi";

// libs
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/mainTop.module.sass";

// components
import BookForm from "./bookForm";
import ConfirmationMessage from "./utilities/confirmationMessage";
import ToggleIcon from "./utilities/toggleIcon";

// in-house hooks
import { useModal } from "../lib/hooks";

export default function MainTop({ gridView, toggleView = (f) => f }) {
  const { library, clearLibrary, addBookToLibrary } = useLibrary();
  // const [gridView, toggleView] = useReducer((gridView) => !gridView, false);
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
    // display confirmationMessage only if there is book available in the library
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
        <div className={Styles.viewToggler}>
          <ToggleIcon
            checked={gridView}
            id="__grid_or_table_view"
            leftIcon={<BiTable />}
            rightIcon={<BiGridAlt />}
            leftTitle="Table View"
            rightTitle="Grid View"
            toggleIcon={toggleView}
          />
        </div>

        <button className={Styles.addBook} onClick={renderModal}>
          <BiBookAdd />
          <span>Add Book</span>
        </button>
      </div>

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
