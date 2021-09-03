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

// sass styles
import Styles from "../styles/bookCard.module.sass";

function CardHeader({ book }) {
  // testing reading states
  // replace this state by readStatus from book prop
  const [checked, toggleChecked] = useReducer((checked) => !checked, false);
  return (
    <div className={Styles.cardHeader}>
      <div className={Styles.cardMeta}>
        <h4>{book.title} </h4>
        <h6>Author: {book.author}</h6>
        <h6>Pages : {book.pages}</h6>
      </div>
      <div className={Styles.cardEdit}>
        <ToggleSwitch />
        {/* <div className={Styles.status}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleChecked()}
            id="readstatus"
          />
          <label
            htmlFor="readstatus"
            className={Styles.toggleWrapper}
            title={checked ? "READ" : "NOT READ"}
          >
            <BiBookReader />
          </label>
        </div> */}
        <div className={Styles.edit}>
          <BiEdit />
        </div>
      </div>
    </div>
  );
}

function CardActions({ book }) {
  return (
    <div className={Styles.cardActions}>
      <div className={Styles.likesComments}>
        <div className={Styles.likes}>
          <div>
            <BiLike />
          </div>
          <span>{book.likes}</span>
        </div>
        <div className={Styles.comments}>
          <div>
            <BiMessageRounded />
          </div>
          <span>{book.comments.length}</span>
        </div>
      </div>
      <div className={Styles.removeMe}>
        <BiTrash />
        <span>Remove Me</span>
      </div>
    </div>
  );
}

export default function BookCard({ book }) {
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
