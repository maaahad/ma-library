// react
import React, { useReducer } from "react";
// nextjs

// react-icons
import { BiXCircle, BiBookAdd, BiReset } from "react-icons/bi";
// sass styles
import Styles from "../styles/bookForm.module.sass";
// components

// NOTE: we may need different ID prefix for different form use
export default function BookForm({
  handleAddBookToLibrary = (f) => f,
  hideAddBookModal = (f) => f,
}) {
  // We will create a custom hook for each input
  // and then a custom hook for overall form
  const inputsReducer = (oldState, newState) => ({ ...oldState, ...newState });
  const [inputsState, setInputsState] = useReducer(inputsReducer, {
    title: "",
    author: "",
    pages: 1,
    readStatus: false,
  });

  const leaveBookForm = () => {
    hideAddBookModal();
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setInputsState({ [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    handleAddBookToLibrary({
      title: form.elements.title.value,
      author: form.elements.author.value,
      pages: form.elements.pages.value,
      readStatus: form.elements.readStatus.checked,
    });
  };

  const resetInputs = () => {
    setInputsState({ title: "", author: "", pages: 1, readStatus: false });
  };

  return (
    <div>
      <div>
        <div>Add Book to Library</div>
        <button type="button" onClick={leaveBookForm}>
          <BiXCircle />
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Book Details</legend>
          <div className={Styles.bookTitle}>
            <input
              id="book-title"
              type="text"
              name="title"
              placeholder="Enter Book title"
              value={inputsState.title}
              onChange={handleInputChange}
              required
              className={Styles.input}
            />
            <label htmlFor="book-title">Title</label>
          </div>
          <div>
            <label htmlFor="author">Author/s</label>
            <input
              type="text"
              name="author"
              placeholder="Enter Book's Author name"
              value={inputsState.author}
              onChange={handleInputChange}
              required
              id="author"
            />
          </div>
          <div>
            <div>
              <label htmlFor="pages">Pages</label>
              <input
                type="number"
                name="pages"
                value={inputsState.pages}
                onChange={handleInputChange}
                id="pages"
              />
            </div>
            <div>
              <label htmlFor="readStatus">Already Read</label>
              <input
                id="readStatus"
                type="checkbox"
                name="readStatus"
                checked={inputsState.readStatus}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>

        {/* submit and reset buttons */}
        <div>
          <button type="button" onClick={resetInputs}>
            <BiReset />
            <span>Reset</span>
          </button>
          <button type="submit">
            <BiBookAdd />
            <span>Add to Library</span>
          </button>
        </div>
      </form>
    </div>
  );
}
