// react
// next

// react-icons
import { BiTrash, BiBookAdd } from "react-icons/bi";

// clsx
import clsx from "clsx";

// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  mainTop: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    "& > * + *": {
      marginLeft: 10,
    },
  },
  summary: {
    width: "calc(100% - 110px - 110px)",
    backgroundColor: "red",
  },
  animatedButton: {
    position: "relative",
    width: 110,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    "& > span": {
      display: "inline-block",
      transition: theme.transitions.all,
      opacity: 0,
      position: "absolute",
      top: 0,
    },
    "&:hover": {
      cursor: "pointer",
      "& > span": {
        opacity: 1,
      },
    },
  },
  clearStorage: {
    // backgroundColor: "green",
    justifyContent: "flex-start",
    "& > span": {
      left: 0,
      marginLeft: 10,
    },
    "&:hover": {
      "& > span": {
        opacity: 1,
        left: 10,
      },
    },
  },
  addBook: {
    // backgroundColor: "green",
    justifyContent: "flex-end",
    "& > span": {
      right: 0,
      marginRight: 10,
    },
    "&:hover": {
      "& > span": {
        opacity: 1,
        right: 10,
      },
    },
  },
}));

export default function MainTop() {
  const classes = useStyles();
  return (
    <div className={classes.mainTop}>
      <div className={clsx(classes.animatedButton, classes.clearStorage)}>
        <BiTrash />
        <span>Clear Store</span>
      </div>
      <div className={classes.summary}>Summary</div>
      <div className={clsx(classes.animatedButton, classes.addBook)}>
        <span>Add Book</span>
        <BiBookAdd />
      </div>
    </div>
  );
}
