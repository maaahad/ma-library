// react
// next

// clsx

// components

// sass styles
import Styles from "../styles/filterNsort.module.sass";

export default function FilterNSort() {
  return (
    <div className={Styles.container}>
      <div className={Styles.filter}>Filter</div>
      <div className={Styles.divider}></div>
      <div className={Styles.sort}>Sort By</div>
    </div>
  );
}
