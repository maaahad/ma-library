// react
import React, { useReducer } from "react";
// nextjs

// react-icons
import { BiXCircle, BiX, BiBookAdd, BiReset, BiEdit } from "react-icons/bi";
// sass styles
import Styles from "../styles/bookForm.module.sass";
// components
import ToggleSwitch from "./utilities/toggleswitch";

// NOTE: we may need different ID prefix for different form use
export default function BookForm({
  formHeader,
  submitText,
  onBookFormSubmit = (f) => f,
  hideModal = (f) => f,
  bookState = {
    title: "",
    author: "",
    pages: 1,
    readStatus: false,
  },
  displayModalHideButton = true,
}) {
  // We will create a custom hook for each input
  // and then a custom hook for overall form
  const inputsReducer = (oldState, newState) => ({ ...oldState, ...newState });
  const [inputsState, setInputsState] = useReducer(inputsReducer, bookState);

  const leaveBookForm = () => {
    hideModal();
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setInputsState({ [name]: value });
  };

  const toggleReadStatus = () => {
    setInputsState({ readStatus: !inputsState.readStatus });
  };

  const resetInputs = () => {
    setInputsState({ title: "", author: "", pages: 1, readStatus: false });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    onBookFormSubmit({
      title: form.elements.title.value,
      author: form.elements.author.value,
      pages: form.elements.pages.value,
      readStatus: inputsState.readStatus,
      //   readStatus: form.elements.readStatus.checked,
    });

    // reset form inputs
    resetInputs();
  };

  return (
    <div className={Styles.bookForm}>
      <div className={Styles.bookFormHeader}>
        <h6>{formHeader}</h6>
        {displayModalHideButton && (
          <button type="button" onClick={leaveBookForm}>
            <BiX />
          </button>
        )}
      </div>
      <div className={Styles.bookDetailsTitle}>
        <div></div>
        <h6>Book Details</h6>
      </div>
      <form onSubmit={onFormSubmit} className={Styles.bookFormInputs}>
        <div className={Styles.textInputWrapper}>
          <input
            id="book-title"
            type="text"
            name="title"
            placeholder="Title"
            value={inputsState.title}
            onChange={handleInputChange}
            required
            className={Styles.input}
          />
          <label htmlFor="book-title">Title</label>
        </div>
        <div className={Styles.textInputWrapper}>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={inputsState.author}
            onChange={handleInputChange}
            required
            id="author"
          />
          <label htmlFor="author">Author</label>
        </div>
        <div className={Styles.pagesNreadStatus}>
          <div className={Styles.numberInputWrapper}>
            <input
              type="number"
              name="pages"
              value={inputsState.pages}
              onChange={handleInputChange}
              id="pages"
            />
            <label htmlFor="pages">Pages</label>
          </div>
          <div className={Styles.checkboxInputWrapper}>
            <ToggleSwitch
              checked={inputsState.readStatus}
              checkedText="Read"
              uncheckedText="Not Read"
              toggleStatus={toggleReadStatus}
            />
          </div>
        </div>

        {/* submit and reset buttons */}
        <div className={Styles.buttonsGroup}>
          <button
            type="button"
            onClick={resetInputs}
            className={Styles.formButton}
          >
            <BiReset />
            <span>Reset</span>
          </button>
          <button type="submit" className={Styles.formButton}>
            <span>{submitText}</span>
            {submitText === "Add" ? <BiBookAdd /> : <BiEdit />}
          </button>
        </div>
      </form>
    </div>
  );
}
