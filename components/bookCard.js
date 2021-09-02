// react

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

// sass styles
import Styles from "../styles/bookCard.module.sass";

function CardHeader() {
  return (
    <div className={Styles.cardHeader}>
      <div className={Styles.cardMeta}>
        <h4>JavaScript The Definitive Guide </h4>
        <h6>Author name</h6>
        <h6>page, year</h6>
      </div>
      <div className={Styles.cardEdit}>
        {/* the following mught be handled with checkbox,  */}
        {/* So that we can target checked state to style in CSS */}
        <div className={Styles.status}>
          {/* read book : green color, unread-book: red color */}
          <BiBookReader />
        </div>
        <div className={Styles.edit}>
          <BiEdit />
        </div>
      </div>
    </div>
  );
}

function CardActions() {
  return (
    <div className={Styles.cardActions}>
      <div className={Styles.likeComment}>
        <div>
          <BiLike />
        </div>
        <div>
          <BiMessageRounded />
        </div>
      </div>
      <div className={Styles.removeMe}>
        <BiTrash />
        <span>Remove Me</span>
      </div>
    </div>
  );
}

export default function BookCard() {
  return (
    <div className={Styles.bookContainer}>
      <CardHeader />
      <div className={Styles.cardMedia}>
        <Image src="/nocoverb.png" layout="fill" objectFit="fill" />
      </div>
      <CardActions />
    </div>
  );
}
