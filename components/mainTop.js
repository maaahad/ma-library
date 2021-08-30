// react
// next

// react-icons
import { FaPlusSquare, FaTrashAlt } from "react-icons/fa";

// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  mainTop: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clearStorage: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  summary: {},
  addBook: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function MainTop() {
  const classes = useStyles();
  return (
    <div className={classes.mainTop}>
      <div className={classes.clearStorage}>
        <FaTrashAlt />
        <span>Clear Store</span>
      </div>
      <div className={classes.summary}>Summary</div>
      <div className={classes.addBook}>
        <FaPlusSquare />
        <span>Clear Store</span>
      </div>
    </div>
  );
}
