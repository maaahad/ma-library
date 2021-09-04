// react
import React, { useReducer } from "react";
// next
import Image from "next/image";
// react icons
import {
  BiEdit,
  BiBookReader,
  BiLike,
  BiMessageRounded,
  BiTrash,
} from "react-icons/bi";

// components
import ToggleSwitch from "./utilities/toggleswitch";

// library
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/bookCard.module.sass";

function CardHeader({ book }) {
  const { toggleBookReadStatus } = useLibrary();
  const toggleStatus = () => {
    toggleBookReadStatus(book.id);
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
        <button className={Styles.edit}>
          <span>Edit This Book</span>
          <BiEdit />
        </button>
      </div>
    </div>
  );
}

function CardActions({ book }) {
  const { removeBookFromLibrary, updateBookLikes } = useLibrary();
  const removeBook = () => {
    removeBookFromLibrary(book.id);
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
        <BiTrash />
        <span>Remove Me</span>
      </button>
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
