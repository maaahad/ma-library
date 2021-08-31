// react
// next
// components
import FilterNSort from "./filterNsort";
// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  books: {},
  filterNsort: {},
  booksTable: {
    display: "none",
  },
  booksCardGrid: {
    display: "block",
  },
  "@media screen and (min-width: 720px)": {
    booksTable: {
      display: "block",
    },
    booksCardGrid: {
      display: "none",
    },
  },
}));

export default function Books() {
  const classes = useStyles();
  return (
    <div className={classes.books}>
      <div className={classes.filterNsort}>
        <FilterNSort />
      </div>
      <div className={classes.booksTable}>Book in a table</div>
      <div className={classes.booksCardGrid}>Book as a Grid of card</div>
    </div>
  );
}
