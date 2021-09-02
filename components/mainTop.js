// react
// next

// react-icons
import { BiTrash, BiBookAdd } from "react-icons/bi";

// sass styles
import Styles from "../styles/mainTop.module.sass";

// clsx
import clsx from "clsx";

export default function MainTop() {
  return (
    <div className={Styles.container}>
      <div className={Styles.summary}>
        <p>Total Books : 1000</p>
        <p>Number of Books read : 40</p>
        <p>Number of Books to be read : 960</p>
      </div>
      <div className={Styles.interaction}>
        <div className={Styles.clearStore} title="Clear Store">
          <BiTrash />
          <span>Clear Store</span>
        </div>
        <div className={Styles.addBook} title="Add Book">
          <BiBookAdd />
          <span>Add Book</span>
        </div>
      </div>
    </div>
  );
}
