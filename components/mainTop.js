// react
// next

// react-icons
import { BiTrash, BiBookAdd } from "react-icons/bi";

// library
import { useLibrary } from "./libraryProvider";

// sass styles
import Styles from "../styles/mainTop.module.sass";

// clsx
import clsx from "clsx";

export default function MainTop() {
  const { clearLibrary } = useLibrary();
  return (
    <div className={Styles.container}>
      <div className={Styles.summary}>
        <p>Total Books : 1000</p>
        <p>Number of Books read : 40</p>
        <p>Number of Books to be read : 960</p>
      </div>
      <div className={Styles.interaction}>
        <button
          className={Styles.clearStore}
          title="Clear Store"
          onClick={clearLibrary}
        >
          <BiTrash />
          <span>Clear Store</span>
        </button>
        <button className={Styles.addBook} title="Add Book">
          <BiBookAdd />
          <span>Add Book</span>
        </button>
      </div>
    </div>
  );
}
