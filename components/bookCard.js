// react

// next

// sass styles
import Styles from "../styles/bookCard.module.sass";

function CardHeader() {
  return (
    <div className={Styles.cardHeader}>
      <div className={Styles.cardMeta}>
        <h4>Title</h4>
        <h6>Author name</h6>
        <h6>page, year</h6>
      </div>
      <div>
        <div>Read</div>
        <div>Edit</div>
      </div>
    </div>
  );
}

export default function BookCard() {
  return (
    <div className={Styles.bookContainer}>
      <CardHeader />
      <div className={Styles.cardMedia}>Book's Image</div>
      <div className={Styles.cardActions}>
        <div>Like and comments</div>
        <div>Delete</div>
      </div>
    </div>
  );
}
